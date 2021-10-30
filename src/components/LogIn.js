import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { actions } from '../redux/actions/Actions';
import { Redirect, useParams, withRouter } from 'react-router-dom';
import ModalAlert from './ModalAlert';


function LogIn({ actionSetCurrentUser, history, currentUser, toModal, actionDeleteToModal }) {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (currentUser.name !== '' && currentUser._id !== null)
            history.push('/');
    }, [currentUser])

    useEffect(() => {
        if (toModal.action === 'login' || toModal.action === 'create') {
            setModalShow(true)
            actionDeleteToModal();
        } else if (toModal.action === 'error') {
            history.push(`/errorAlert/${toModal.massage}`);
            actionDeleteToModal();
            console.log('dalete error modal');
        }
    }, [toModal])

    return (
        <>
            <div className="p-4 col-10 col-md-8 col-lg-5 about-class">

                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = 'Required';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 8) {
                            errors.password = "Password can't be less than 8 characters";
                        }
                        return errors;
                    }}
                    onSubmit={
                        async (values, { setSubmitting }) => {
                            const newUser = {
                                username: values.username,
                                password: values.password
                            }
                            console.log(newUser);
                            await actionSetCurrentUser(newUser)
                            setSubmitting(false);
                            // history.push('/');
                        }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">username</label>
                                <input
                                    id="username"
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                <span className="text-danger">{errors.username && touched.username && errors.username}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input
                                    id="password"
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <span className="text-danger">{errors.password && touched.password && errors.password}</span>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-secondary col-12 my-2">
                                Sign Up
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
            <ModalAlert
                user={currentUser.name}
                resAction={toModal.action}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        toModal: state.user.toModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionSetCurrentUser: (obj) => dispatch(actions.setCurrentUid(obj)),
        actionDeleteToModal: () => dispatch(actions.deleteToModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogIn));

