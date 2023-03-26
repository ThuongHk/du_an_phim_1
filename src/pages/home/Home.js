import React, { useEffect } from 'react'
import HomeMenu from '../homeMenu/HomeMunu'
import MovieCard from './movieCard/MovieCard'
import styles from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import MultipleSlick from '../../components/reactSlick/MultipleSlick'
import { layDanhSachFim } from '../../redux/quanLyPhimSlice'


const Home = () => {

    const { arrFim } = useSelector(state => state.quanLyFimSlice)
   const { heThongRapChieu } = useSelector(state => state.quanLyRapSlice)
   console.log(heThongRapChieu)

    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(layDanhSachFim())
    }, [])

    
    return (
        <div className={styles.container}>
            <div className='row mt-5'>
                <MultipleSlick arrFim={arrFim} />
                <div className='grid grid-cols-3 mt-5 '>
                    {/* {renderListFim} */}
                </div>
            </div>
            <div className='row mt-5 mb-5'>
                <HomeMenu />
            </div>
        </div>
    )
}

export default Home