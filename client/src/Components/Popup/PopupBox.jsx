import styles from './PopupBox.module.css'
import {
    setPopup,
    setDeletePopup,
    removeForm,
    addFolder,
    deleteFolder,
    setFormPopup,
    addForm
    , setFormToDelete
    , setDeleteFormPopup,
    setFolderToDelete

} from '../../redux/Reducer/folderSlice';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';




const PopupBox = () => {

    const popup = useSelector((state) => state.folder.popup)
    const deletePopup = useSelector((state) => state.folder.deletePopup)
    const formPopup = useSelector((state) => state.folder.formPopup)
    const deleteFormPopup = useSelector((state) => state.folder.deleteFormPopup)
    console.log(deleteFormPopup)
    const dispatch = useDispatch()
    const [folderInput, setFolderInput] = useState('')
    const [formInput, setFormInput] = useState('')

    const createFolder = () => {
        if (folderInput.trim() !== '') {
            dispatch(addFolder(folderInput));
            setFolderInput('');
            dispatch(setPopup(false));
        } else {
            toast.error('input can not be empty');

        }
    }
    const handleAddForm = () => {
        if (formInput.trim() !== '') {
            dispatch(addForm(formInput))
            setFormInput('')
            dispatch(setFormPopup(false))
        } else {
            toast.error('input can not be empty plase fill');
        }

    }


    return (
        <div className={styles.popupBoxes}>
            {popup && (
                <div className={styles.popupFolder}>
                    {/* <ToastContainer /> */}
                    <p className={`sans-font text-white ${styles.folderHeading}`}>Create New Folder</p>
                    <input type="text"
                        placeholder='Enter folder name'
                        className={`${styles.folderInput} flex text-white`}
                        value={folderInput}
                        onChange={(e) => setFolderInput(e.target.value)}
                    />
                    <div className={`${styles['popup-buttons']} flex`}>
                        <button
                            className={styles.doneBtn}
                            onClick={createFolder}
                        >Done</button>
                        <div style={{ fontSize: '3rem', color: '#47474A' }}>|</div>
                        <button
                            className={`${styles.cancleBtn} text-white`}
                            onClick={() => dispatch(setPopup(false))}
                        >Cancel</button>
                    </div>
                </div>
            )}

            {/* Delete Folder Confirmation Popup */}
            {deletePopup && (
                <div className={styles.popupFolder}>
                    <p className={`sans-font text-white flex justify-center text-center`} style={{ marginTop: '6%', fontSize: '1.7rem', fontWeight: '500' }}>
                        Are you sure you want to <br /> delete this folder?
                    </p>
                    <div className={`${styles['popup-buttons']} flex`}>
                        <button
                            className={styles.doneBtn}
                            onClick={() => {
                                dispatch(deleteFolder());
                                dispatch(setDeletePopup(false));
                            }}
                        >Confirm</button>
                        <div style={{ fontSize: '3rem', color: '#47474A' }}>|</div>
                        <button
                            className={`${styles.cancleBtn} text-white`}
                            onClick={() => {
                                dispatch(setFolderToDelete(null));
                                dispatch(setDeletePopup(false));
                            }}
                        >Cancel</button>
                    </div>
                </div>
            )}



            {formPopup &&
                (
                    <div className={styles.popupFolder}>
                        {/* <ToastContainer /> */}
                        <p className={`sans-font text-white ${styles.folderHeading}`}>Create New Form</p>
                        <input type="text"
                            placeholder='Enter form name'
                            className={`${styles.folderInput} flex text-white`}
                            value={formInput}
                            onChange={(e) => setFormInput(e.target.value)}
                        />
                        <div className={`${styles['popup-buttons']} flex`}>
                            <button
                                className={styles.doneBtn}
                                onClick={handleAddForm}
                            >Done</button>
                            <div style={{ fontSize: '3rem', color: '#47474A' }}>|</div>
                            <button
                                className={`${styles.cancleBtn} text-white`}
                                onClick={() => {
                                    dispatch(setFormPopup(false))
                                    setFormInput('')
                                }}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }


            {
                deleteFormPopup && (
                    <div className={styles.popupFolder}>
                        <p className={`sans-font text-white flex justify-center text-center`} style={{ marginTop: '6%', fontSize: '1.7rem', fontWeight: '500' }}>
                            Are you sure you want to <br /> delete this form..?
                        </p>
                        <div className={`${styles['popup-buttons']} flex`}>
                            <button
                                className={styles.doneBtn}
                                onClick={() => {
                                    dispatch(removeForm());
                                    dispatch(setDeleteFormPopup(false));
                                }}
                            >Confirm</button>
                            <div style={{ fontSize: '3rem', color: '#47474A' }}>|</div>
                            <button
                                className={`${styles.cancleBtn} text-white`}
                                onClick={() => {
                                    dispatch(setFormToDelete(null));
                                    dispatch(setDeleteFormPopup(false));
                                }}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            <ToastContainer />
        </div>
    )
}
export default PopupBox