import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { getTransactionCategories } from '../../redux/categoriesTransactions/operations';
import { selectorcategoriesTr } from '../../redux/categoriesTransactions/selectors';
import { updateTransactions } from '../../redux/transactions/operations';
import css from '../../sass/Module/ModalEditTransactions.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from './CustomSelect';

const ModalEditTransactions = ({ transaction, closeModal }) => {
  const [startDate, setStartDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setStartDate(transaction.transactionDate);
    if (transaction.type === 'EXPENSE') {
      dispatch(getTransactionCategories());
    }
  }, [dispatch]);

  let categories = useSelector(selectorcategoriesTr);
  let incomeCategoryId;

  useEffect(() => {
    if (categories.length && transaction.type === 'EXPENSE') {
      const category = categories.find(category => category.id === transaction.categoryId);
      setSelectedCategory(category ? { value: category.id, label: category.name } : null);
    }
  }, [categories, transaction]);

  if (categories.length) {
    incomeCategoryId = categories.filter(el => el.type === 'INCOME')[0].id;
    categories = categories.filter(el => el.type === 'EXPENSE');
  }

  const submitSchema = Yup.object().shape({
    amount: transaction.type === "INCOME"
      ? Yup.number().required().positive()
      : Yup.number().required().positive(),
    comment: Yup.string().required(),
  });

  const handleSubmit = async values => {
    values.type = transaction.type;
    values.amount = transaction.type === "EXPENSE" ? 0 - values.amount : values.amount;
    values.categoryId = transaction.type === "EXPENSE" ? selectedCategory.value : incomeCategoryId;
    values.transactionDate = startDate;

    const response = await dispatch(updateTransactions({ transactionId: transaction.id, values }));

    if (response.meta.requestStatus === 'fulfilled') {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.content} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={closeModal}>X</button>
        <div className={css.title}>Edit Transaction</div>
        <Formik
          initialValues={{
            transactionDate: transaction.transactionDate,
            type: transaction.type,
            categoryId: transaction.categoryId,
            comment: transaction.comment,
            amount: Math.abs(transaction.amount),
          }}
          validationSchema={submitSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, setFieldTouched, values, errors }) => (
            <Form autoCapitalize="off">
              <div className={css.toggleContainer}>
                <span
                  className={`${css.leftText} ${transaction.type === "INCOME" ? css.income : ''} `}
                >
                  Income
                </span>
                <span style={{ color: 'white', opacity: '0.6' }}>
                  /
                </span>
                <span
                  className={`${css.rightText} ${transaction.type === "EXPENSE" ? css.expense : ''}`}
                >
                  Expense
                </span>
              </div>
              {transaction.type === "EXPENSE" ? (
                <div className={`${css.input} ${css.selectContainer}`}>
                  <Field as="select" name="categoryId" className={css.customSelect}>
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
                </div>
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
                    selected={startDate}
                    onChange={date => {
                      setStartDate(date)
                      setFieldValue('transactionDate', date, true);
                      setFieldTouched('transactionDate', true, false);
                    }}
                    wrapperClassName="datepicker"
                    dateFormat="dd.MM.yyyy"
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

export default ModalEditTransactions;
