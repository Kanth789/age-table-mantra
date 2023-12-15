import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setShouldSHowUserForm } from '../store/userDataSlice';

const Navbar =()=>{
    const dispatch = useDispatch()
    const onClickOnAdd = () =>{
        dispatch(setShouldSHowUserForm(true))
    }
return(
    <div>
        <div className='flex justify-around items-center'>
            <span>Age Table</span>
            <Button onClick={onClickOnAdd}>Add</Button>
        </div>
    </div>
)
}

export default Navbar