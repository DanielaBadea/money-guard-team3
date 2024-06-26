import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { getTransactionCategories } from '../../redux/categoriesTransactions/operations';
import { selectorcategoriesTr } from '../../redux/categoriesTransactions/selectors';
import { addTransactions } from '../../redux/transactions/operations';
import css from '../../sass/Module/ModalAddTransactions.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const ModalAddTransactions = ({ closeModal }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCategories());
  }, []);

  let categories = useSelector(selectorcategoriesTr);
  let incomeCategoryId;

  if (categories.length) {
    incomeCategoryId = categories.filter(el => el.type === 'INCOME')[0].id;
    categories = categories.filter(el => el.type === 'EXPENSE');
  }

  const submitSchema = Yup.object().shape({
    amount: isToggled
      ? Yup.number().required().positive()
      : Yup.number().required().positive(),
    comment: Yup.string().required(),
  });

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmit = async values => {
    values.type = isToggled ? 'EXPENSE' : 'INCOME';
    values.amount = isToggled ? 0 - values.amount : values.amount;
    values.categoryId = isToggled ? values.categoryId : incomeCategoryId;

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
              <div className={`${css.input} ${css.selectContainer}`}>
                <Field as="select" name="categoryId">
                  <option value="">Select a Category</option>
                  {categories.map(el => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </Field>
              </div>
            ) : (
              ''
            )}
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
                selected={startDate}
                onChange={date => setStartDate(date)}
                wrapperClassName="datepicker"
                dateFormat="dd.MM.yyyy"
              />
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
        </Formik>
      </div>
    </div>
  );
};

export default ModalAddTransactions;
