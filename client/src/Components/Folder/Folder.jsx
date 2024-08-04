import styles from './Folder.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {

    setPopup,
    setFormPopup,
    setDeletePopup,
    setFolderToDelete,

} from '../../redux/Reducer/folderSlice';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const FolderCreate = () => {
    const folders = useSelector((state) => state.folder.folders)
    const popup = useSelector((state) => state.folder.popup)
    const folderToDelete = useSelector((state) => state.folder.folderToDelete)
    console.log(folderToDelete)
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>

            <div className={styles.createFolder}>

                <button className={`${styles.folderBox} sans-font text-white`} onClick={() => dispatch(setPopup(!popup))}>
                    <MdOutlineCreateNewFolder /> Create a folder
                </button>

                {/* Display created folders */}
                <div className={`${styles.folderList} `}>
                    {folders.map((folder, index) => (
                        <div key={index} className={`${styles.folderItem} sans-font text-white`}
                            onClick={() => {
                                dispatch(setFormPopup(true))

                            }}

                        >
                            <span style={{ marginLeft: '12px' }}

                            >
                                {folder}
                                <RiDeleteBin6Line style={{ marginLeft: '12px', color: 'red' }} onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch(setFolderToDelete(folder));
                                    dispatch(setDeletePopup(true));

                                }} />
                            </span>
                        </div>
                    ))}
                </div>




            </div>
        </div>
    )
}

export default FolderCreate








