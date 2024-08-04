import { useDispatch, useSelector } from 'react-redux';
import styles from './Dashbord.module.css';
import { useEffect } from 'react';
import { setFolders, loadForms } from '../../redux/Reducer/folderSlice';
import DropdownMenu from '../../Components/DropdownMenu/DropdownMenu';
import FolderCreate from '../../Components/Folder/Folder';
import PopupBox from '../../Components/Popup/PopupBox';
import FormCreate from '../../Components/Form/Form';

function Dashbord() {
    const folders = useSelector((state) => state.folder.folders);
    const forms = useSelector((state) => state.folder.forms);
    console.log(forms)
    const dispatch = useDispatch();

    useEffect(() => {
        // Retrieve folders from local storage when the component mounts
        const storedFolders = localStorage.getItem('folders');
        if (storedFolders) {
            dispatch(setFolders(JSON.parse(storedFolders)));
        }

        // Retrieve forms from local storage when the component mounts
        const storedForms = localStorage.getItem('forms');
        if (storedForms) {
            dispatch(loadForms(JSON.parse(storedForms)));
        }
    }, [dispatch]);

    useEffect(() => {
        // Save folders to local storage whenever they are updated💕
        localStorage.setItem('folders', JSON.stringify(folders));
    }, [folders]);

    useEffect(() => {
        // Save forms to local storage whenever they are updated
        localStorage.setItem('forms', JSON.stringify(forms));
    }, [forms]);

    return (

        <div className={styles.Container}>
            <DropdownMenu />
            <FolderCreate />
            <FormCreate />
            <PopupBox />
        </div>

    );
}

export default Dashbord;
