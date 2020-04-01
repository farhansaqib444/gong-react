import React, {useRef} from 'react';
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

export default function Header() {
    const { register, handleSubmit, watch, errors} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = formData => {
        console.log(formData)
    };

    console.log(watch(['firstName', 'username']));


        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                        <img className="navbar-brand" src={'frontend/images/gong-logo.png'} alt="" />
                        <div className="d-flex">
                            <div className="dropdown  show-mob-hide-web mr-2">
                            <Link className="nav-link dropdown-toggle" to={""} id="mobile-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="nav-user-icon" src={'frontend/images/user-icon.png'} alt="" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="mobile-user">
                                <Link className="dropdown-item" to={" "}>Profile</Link>
                                <Link className="dropdown-item" to={" "}>Setting</Link>
                                <Link className="dropdown-item" to={" "}>Logout</Link>
                            </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                            <form className="form-inline my-4 my-lg-0 search-widget ml-auto">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button type="submit">
                                <i className="material-icons">
                                search
                                </i>
                            </button>
                            </form>
                            <ul className="navbar-nav  mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to={" "}>Gong Talk <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={" "}>Gong News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={" "}>Community</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/o`} className="nav-link">Home</Link>
                                {/* <Link className="nav-link" to={" "}>Group</Link> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={" "}>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={" "}>Subscription</Link>
                            </li>
                            <li className="nav-item dropdown show-web-hide-mob">
                                <button className="btn btn-primary rounded-pill" data-toggle="modal" data-target="#signUpModal">Join Now</button>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>

                <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        {/* eslint-disable-next-line no-useless-concat */}
                        <div className="modal-content theme-modal sign-up-modal" style={{  backgroundImage: "url(" + "http://localhost:3000/frontend/images/modal-bg.png" + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            <span className="modal-divider">
                                OR
                            </span>
                            <div className="container">
                            <div className="row align-items-center">

                                <div className="col-md-6 col-sm-6">
                                <div className="already-account">
                                    <p>Already have an account?</p>
                                    <Link data-dismiss="modal" to={""} data-toggle="modal" data-target="#loginModal">Log In</Link>
                                </div>
                                </div>
                                <div className="col-md-6 col-sm-6 text-center bg-red py-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h2 className="modal-title">Sign Up</h2>
                                    <p className="title-description">
                                    Please enter your details to sign up and be a part of great community.
                                    </p>
                                    
                                    <div className="input-field">
                                        <label htmlFor="firstName">Name</label>
                                        <div className="input-group mb-3">
                                            <input className="form-control" name="firstName"  ref={register({ required: true, maxLength: 15 })} />
                                        </div>
                                        {errors.firstName && <span>Max length should be 15 digit</span>}
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="username">Username</label>
                                        <div className="input-group mb-3">
                                            <input className="form-control" name="username" ref={register({ required: true, maxLength: 15 })} />
                                        </div>
                                        {errors.username && <span>This field is required</span>}
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="Email">Email</label>
                                        <div className="input-group mb-3">
                                            <input className="form-control" type="email" name="Email"  ref={register({ required: true,  })} />
                                        </div>
                                        {errors.Email && <span>Email Incorrect</span>}
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="age">Age</label>
                                        <div className="input-group mb-3">
                                            <input className="form-control" name="age" type="number" ref={register({ min: 18, max: 99 })} />                                        </div>
                                        {errors.age && <span>min age 18  max age 99</span>}
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="gender">Gender</label>
                                        <div className="input-group mb-3">
                                            <select className="form-control" name="gender" ref={register({ required: true })}>
                                                <option value="male">male</option>
                                                <option value="female">female</option>
                                            </select>
                                        </div>
                                        {errors.gender && <span>This field is required</span>}
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="password">Password</label>
                                        <div className="input-group mb-3">
                                            <input className="form-control"
                                                   name="password"
                                                   type="password"
                                                   ref={register({
                                                       required: "You must specify a password",
                                                       minLength: {
                                                           value: 8,
                                                           message: "Password must have at least 8 characters"
                                                       }
                                                   })}
                                            />
                                        </div>
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="Password">Confirm Password</label>
                                        <div className="input-group mb-3">
                                            <input className="form-control"
                                                   name="password_repeat"
                                                   type="password"
                                                   ref={register({
                                                       validate: value =>
                                                           value === password.current || "The passwords do not match"
                                                   })}
                                            />
                                        </div>
                                        {errors.password_repeat && <span>{errors.password_repeat.message}</span>}

                                    </div>
                                    <button type="submit" className="btn btn-primary rounded-pill mt-3">Sign Up</button>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="signUpModal2" tabIndex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content theme-modal sign-up-modal">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <span className="modal-divider">
                            &
                        </span>
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-6">
                            <div className="already-account mb-0 mb-sm-4">
                                <p>Already have an account?</p>
                                <Link to={""} href="">Log In</Link>
                            </div>
                            <div className="user-gender">
                                <label htmlFor=""> I'm a</label>
                                <div className="mb-4 mb-sm-0">
                                <button className="btn btn-primary rounded-pill mr-2">
                                    <img src="../assets/images/female-icon.png" alt="female" /> Female
                                </button>
                                <button className="btn btn-light rounded-pill">
                                    <img src="../assets/images/male-icon.png" alt="male" /> Male
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 col-sm-6 text-center bg-red py-5">

                            <form action="">
                                <div className="upload-user-img">
                                <img src="../assets/images/user-placeholder.png" alt="" />
                                <span>
                                    <i className="material-icons">
                                    photo_camera
                                    </i>
                                    </span>
                                </div>
                                <div className="input-field">
                                <label htmlFor="Name">Name</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" id="Name" />
                                </div>
                                </div>
                                <div className="input-field">
                                <label htmlFor="Username">Username</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" id="Username" />
                                </div>
                                </div>
                                <div className="input-field">
                                <label htmlFor="Date of Birth">Date of Birth</label>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" id="Date of Birth" />
                                </div>
                                </div>
                                <div className="input-field">
                                <label htmlFor="Country">Country</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" id="Country" />
                                </div>
                                </div>
                                <button className="btn btn-primary rounded-pill mt-3">Complete Sign Up</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    {/* eslint-disable-next-line no-useless-concat */}
                    <div className="modal-content theme-modal login-modal" style={{  backgroundImage: "url(" + "http://localhost:3000/frontend/images/modal-bg.png" + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <span className="modal-divider">
                            OR
                        </span>
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-6 text-center bg-red py-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="modal-title">Log In</h2>
                                <p className="title-description">
                                to your account
                                </p>
                                <div className="input-field">
                                    <label htmlFor="Email">Email</label>
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="email" name="loginEmail"  ref={register({ required: true,  })} />
                                    </div>
                                    {errors.loginEmail && <span>Email Incorrect</span>}
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <div className="input-group mb-3">
                                        <input className="form-control"
                                               name="loginPassword"
                                               type="password"
                                               ref={register({
                                                   required: "You must specify a password",
                                                   minLength: {
                                                       value: 8,
                                                       message: "Password must have at least 8 characters"
                                                   }
                                               })}
                                        />

                                    </div>
                                    {errors.loginPassword && <span>{errors.loginPassword.message}</span>}
                                </div>
                                <button type="submit" className="btn btn-primary rounded-pill mt-3">Login</button>
                            </form>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            <div className="already-account mb-0 mb-sm-4">
                                <p>Don't have an account?</p>
                                <Link to={""} data-dismiss="modal" data-toggle="modal" data-target="#signUpModal" href="">Sign Up</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
           
        );
    };
