import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from "axios";


function FormNew() {

    const [payDate, setPayDate] = useState('')


    const validationSchema = Yup.object().shape({
        CardNumber: Yup.string()
            .min(16, "только цифры, длина значения 16")
            .max(16, "только цифры, длина значения 16")
            .required("только цифры, длина значения 16"),
        ExpirationDate:
            Yup.date()
                .max(new Date(), "Future date not allowed")
                .required("Enter date")
                .typeError("Invalid date"),
        CVV: Yup.string()
            .min(3, " длина значения 3")
            .max(3, " длина значения 3")
            .required("Required"),
        Amount: Yup.string()
            .max(30, "только цифры")
            .required("Required"),

    });
    const formOptions = {resolver: yupResolver(validationSchema)};

    // get functions to build form with useForm() hook
    const {register, handleSubmit, reset, formState} = useForm(formOptions);
    const {errors} = formState;

    const onSubmit = (data, e) => {
        let arr = []
        axios.post("http://localhost:8000/pay", {
            cardNumber: data.CardNumber,
            ExpirationDate: data.ExpirationDate,
            CVV: data.CVV,
            Amount: data.Amount
        }).then(function (response) {
            console.log(response.data, "response.data,sponse")
            arr.push(response.data)
            setPayDate(arr)
        }).catch(function (error) {
            alert("err")
        });
    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
        <div className="card m-3">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label>CardNumber</label>
                            <input name="cardNumber" type="number" {...register('CardNumber')}
                                   className={`form-control ${errors.CardNumber ? 'is-invalid' : ''}`}/>
                            <div className="invalid-feedback">{errors.CardNumber?.message}</div>
                        </div>
                        <div className="form-group col-12">
                            <label>Date</label>
                            <input name="ExpirationDate" type="date" {...register('ExpirationDate')}
                                   className={`form-control ${errors.ExpirationDate ? 'is-invalid' : ''}`}/>
                            <div className="invalid-feedback">{errors.ExpirationDate?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-12">
                            <label>CVV</label>
                            <input name="CVV" type="text" {...register('CVV')}
                                   className={`form-control ${errors.CVV ? 'is-invalid' : ''}`}/>
                            <div className="invalid-feedback">{errors.CVV?.message}</div>
                        </div>
                        <div className="form-group col-12">
                            <label>Amount</label>
                            <input name="Amount" type="number" {...register('Amount')}
                                   className={`form-control ${errors.Amount ? 'is-invalid' : ''}`}/>
                            <div className="invalid-feedback">{errors.Amount?.message}</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1">Send</button>
                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                    </div>
                </form>
            </div>

        </div>

            <div>
                <h2>Instructions</h2>
                {payDate &&  payDate.map(({cardNumber,payDate,cvv,amount}) => {
                    return(
                        <pre>
                           cardNumber - {cardNumber} <br />
                            ExpirationDate - {payDate}  <br />
                            CVV - {cvv}   <br />
                            Amount - {amount}   <br />
                       </pre>
                    )
                })}
            </div>
        </>
    )
}

export {FormNew};