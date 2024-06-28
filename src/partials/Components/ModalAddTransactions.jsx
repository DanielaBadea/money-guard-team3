import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { getTransactionCategories } from '../../redux/categoriesTransactions/operations';
import { selectorcategoriesTr, selectorIsLoading } from '../../redux/categoriesTransactions/selectors';
import { addTransactions } from '../../redux/transactions/operations';
import css from '../../sass/Module/ModalAddTransactions.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from './CustomSelect';

const ModalAddTransactions = ({ closeModal }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);

  let categories = useSelector(selectorcategoriesTr);
  let incomeCategoryId;

  if (categories.length) {
    incomeCategoryId = categories.filter(el => el.type === 'INCOME')[0].id;
    categories = categories.filter(el => el.type === 'EXPENSE');
  }

  const dayClassName = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) ? `${css['current-day']}` : undefined;
  };


  const submitSchema = Yup.object().shape({
    amount: isToggled
      ? Yup.number().required().positive()
      : Yup.number().required().positive(),
    comment: Yup.string().required(),
    transactionDate: Yup.date().required(),
  });

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmit = async values => {
    values.type = isToggled ? 'EXPENSE' : 'INCOME';
    values.amount = isToggled ? 0 - values.amount : values.amount;
    values.categoryId = isToggled ? selectedCategory.value : incomeCategoryId;

    values.transactionDate = new Date(startDate).setDate(
      new Date(startDate).getDate() + 1
    );

    values.transactionDate = new Date(values.transactionDate);
    const response = await dispatch(addTransactions(values));

    if (response.meta.requestStatus === 'fulfilled') {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.content} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={closeModal}>X</button>
        <div className={css.title}>Add Transaction</div>
        <Formik
          initialValues={{
            transactionDate: '',
            type: '',
            categoryId: '',
            comment: '',
            amount: '',
          }}
          validationSchema={submitSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, setFieldTouched, values, errors }) => (
            <Form autoCapitalize="off">
              <div className={css.toggleContainer}>
                <span
                  className={`${css.leftText} ${!isToggled ? css.income : ''} `}
                >
                  Income
                </span>
                <div className={css.switch} onClick={handleToggle}>
                  <div
                    className={`${css.slider} ${isToggled ? css.toggled : ''}`}
                  >
                    {isToggled ? '+' : '-'}
                  </div>
                </div>
                <span
                  className={`${css.rightText} ${isToggled ? css.expense : ''}`}
                >
                  Expense
                </span>
              </div>
              {isToggled ? (
                <Field name="categoryId">
                  {({ field }) => (
                    <CustomSelect
                      options={categories.map(category => ({
                        value: category.id,
                        label: category.name
                      }))}
                      value={selectedCategory}
                      onChange={option => setSelectedCategory(option)}
                      placeholder="Select a category"
                    />
                  )}
                </Field>
              ) : (
                ''
              )}
              <div className={css.amountAndDate}>
                <div>
                  <Field
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div className={css.datePicker}>
                  <DatePicker
                    name="transactionDate"
                    selected={startDate}
                    onChange={date => {
                      setStartDate(date)
                      setFieldValue('transactionDate', date, true);
                      setFieldTouched('transactionDate', true, false);
                    }}
                    wrapperClassName="datepicker"
                    dateFormat="dd.MM.yyyy"
                    dayClassName={dayClassName}
                  />
                  <ErrorMessage
                    name="transactionDate"
                    component="div"
                    className={css.error}
                  />
                </div>
              </div>
              <div className={css.comment}>
                <Field
                  name="comment"
                  type="text"
                  placeholder="comment"
                  className={css.input}
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.button}>
                <button className={css.addButton} type="submit">
                  Add
                </button>
                <button className={css.cancelButton} onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalAddTransactions;
