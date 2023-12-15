import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteUserDetails, setEditUserData, setShouldSHowUserForm, setuserClickedOnEditIcon } from "../store/userDataSlice";
import { useEffect, useState } from "react";

const Column = (props) => {
  const { columnTitle, columnData } = props;
  const dispatch = useDispatch()
  const onClickEditButton = (value) =>{
      dispatch(setEditUserData(value))
      dispatch(setuserClickedOnEditIcon(true))
    dispatch(setShouldSHowUserForm(true))
  }
  const onClickDeleteIcon = (value) =>{
    dispatch(deleteUserDetails(value))
  }
 
  return (
    <div className='text-center' style={{width:'550px'}}> 
      <div className="border-4 grey border-b-grey">
        <span >{columnTitle ? columnTitle : "Age"}</span>
      </div>
      <div className="border-4 grey border-b-grey p-2">
        {columnData?.length > 0 && columnData?.map((eachItem) => (
          <div className="flex flex-col m-10" style={{border:'1px solid red',padding:'4px'}}>
            <div className="mb-3">
                <div>
                    <Button title="Edit" startIcon={<EditIcon />} size="2px" style={{padding:'1px',width:'20px'}} onClick={()=>onClickEditButton(eachItem)}/>
                    <Button title="Delete" startIcon={<DeleteIcon/>} variant="outlined" style={{width:'20px'}} onClick={()=>onClickDeleteIcon(eachItem?.id)}/>
                </div>
            </div>
            <div className="flex flex-col ">
            <span>Name: {eachItem?.name}</span>
            <span>Email: {eachItem?.email}</span>
            <span>Number: {eachItem?.number}</span>
            <span>Age: {eachItem?.age}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
