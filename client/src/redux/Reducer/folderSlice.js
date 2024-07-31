import { createSlice } from "@reduxjs/toolkit";

const storedForms = () => {
  try {
    const serializedState = localStorage.getItem("forms");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};
const initialState = {
  folders: [],
  // forms: [],
  forms: storedForms(),
  popup: false,
  deletePopup: false,
  formPopup: false,
  folderToDelete: null,
  formToDelete: null,
  deleteFormPopup: false,
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolders(state, action) {
      state.folders = action.payload;
    },
    setPopup(state, action) {
      state.popup = action.payload;
    },
    setDeletePopup(state, action) {
      state.deletePopup = action.payload;
    },
    setFormPopup(state, action) {
      state.formPopup = action.payload;
    },
    setDeleteFormPopup(state, action) {
      state.deleteFormPopup = action.payload;
    },
    setFolderToDelete(state, action) {
      state.folderToDelete = action.payload;
    },
    setFormToDelete: (state, action) => {
      state.formToDelete = action.payload;
    },

    addFolder(state, action) {
      state.folders.push(action.payload);
    },

    deleteFolder(state) {
      state.folders = state.folders.filter(
        (folder) => folder !== state.folderToDelete
      );
      state.folderToDelete = null;
    },
    addForm: (state, action) => {
      state.forms.push(action.payload);
      localStorage.setItem("forms", JSON.stringify(state.forms));
    },
    removeForm: (state) => {
      console.log(state);
      state.forms = state.forms.filter((form) => form !== state.formToDelete);
      state.formToDelete = null;
      localStorage.setItem("forms", JSON.stringify(state.forms));
    },

    loadForms: (state, action) => {
      state.forms = action.payload;
    },
  },
});

export const {
  setFolders,
  setPopup,
  setDeletePopup,
  setFolderToDelete,
  addFolder,
  addForm,
  deleteFolder,
  setFormPopup,
  setFormToDelete,
  removeForm,
  loadForms,
  setDeleteFormPopup,
} = folderSlice.actions;

export default folderSlice.reducer;
