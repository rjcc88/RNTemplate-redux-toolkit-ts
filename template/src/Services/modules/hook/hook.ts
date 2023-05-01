import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../utils/store';

import { useLoginMutation } from '@/Services/api/Redux/authApiSlice';

export function useGetFetchDetail(data:any){
    const dispatch = useDispatch()
    const status = useSelector((state:RootState)=> useLoginMutation(data))
}