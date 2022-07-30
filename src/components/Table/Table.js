import React, { useMemo, useState } from 'react'
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { ColumnFilter } from './ColumnFilter'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import DropDown from './DependentDropdown/DropDown'

const Table = () => {
    const [tableCall, setTableCall] = useState(false)
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = React.useMemo(
        () => ({
            Filter: ColumnFilter
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    )

    console.log(tableCall)
    return (
        <div className='px-2 mb-8'>
            <DropDown setTableCall={setTableCall}></DropDown>
            {
                tableCall &&
                <div>
                    <h1 className='text-orange-500 font-semibold mb-2 text-xl'>Private Claims</h1>
                    <div className="overflow-x-auto">
                        <table className=" table table-compact w-full border-1" {...getTableProps()}>
                            <thead>
                                {/*sorting */}
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th  {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <div>
                                                        {column.render('Header')}
                                                    </div>
                                                    <div className=' ml-2 text-white'>
                                                        <p className='text-sm bg-black mb-1 rounded'><IoMdArrowDropup /></p>
                                                        <p className='text-sm bg-black rounded'><IoMdArrowDropdown /></p>
                                                    </div>
                                                </div>

                                                <span>
                                                    {column.isSorted
                                                        ? column.isSortedDesc
                                                            ? ' '
                                                            : ' '
                                                        : ''}
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                ))}

                                {/*filtering */}
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>
                                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>

                            <tbody {...getTableBodyProps()}>
                                {rows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr className='text-center' {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            }

        </div>
    );
};

export default Table;