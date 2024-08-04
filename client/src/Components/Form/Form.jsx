import styles from './Form.module.css';
import { FiPlus } from "react-icons/fi";
import { setFormPopup, setDeleteFormPopup } from '../../redux/Reducer/folderSlice';
import { useNavigate } from 'react-router-dom';
import delIcon from '../../assets/delete-icon.png';
import { useDispatch, useSelector } from 'react-redux';


function FormCreate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const forms = useSelector(state => state.folder.forms);
    console.log(forms)

    return (
        <div className={styles.container}>
            <div className={styles.FormDiv}>
                <div className={`${styles['form-box']} flex `}>
                    <div className={`${styles['typebot-form']} flex flex-col justify-center items-center`}>
                        <button
                            className={styles.plusBtn}
                            onClick={() => {
                                dispatch(setFormPopup(true))

                            }}
                        >
                            <FiPlus />
                        </button>
                        <p className={` text-white sans-font`}>Create a typebot</p>
                    </div>

                    {/* display froms  */}
                    {forms.map((form, index) => (
                        <div key={index} className={`${styles['form-name']} flex flex-col justify-center items-center`}>
                            <img
                                src={delIcon}
                                alt="delete"
                                className={styles.delicon}
                                onClick={() => {
                                    dispatch(setDeleteFormPopup(true))

                                }}
                            />
                            <button
                                className={`${styles.formName} text-white sans-font`}
                                onClick={() => navigate(`/workspace`)}
                            >
                                {form}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FormCreate;
