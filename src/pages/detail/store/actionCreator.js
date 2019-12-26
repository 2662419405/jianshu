import axios from 'axios';
import * as constants from './constant';

const getDetailData = (value) => ({
    type: constants.GETDEFAULTLIST,
    value
})

export const getDetailList = (page) => {
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+page).then( (res)=>{
            const result =res.data.data;
            dispatch(getDetailData(result));
        } )
    }
} 