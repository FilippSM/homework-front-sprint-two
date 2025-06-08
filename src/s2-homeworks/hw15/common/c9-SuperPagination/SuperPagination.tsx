import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
   //const lastPage = 10 // пишет студент // вычислить количество страниц
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // Вычисляем общее количество страниц

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        //пишкт студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        onChange(1, Number(event.target.value))
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                    marginRight: '10px',
                    '& .MuiPaginationItem-root': {
                        color: '#000',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#0066CC',
                        color: '#fff',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
