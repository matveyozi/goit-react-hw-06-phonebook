import React from 'react'
import TextField from '@mui/material/TextField';
import cssModule from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filtersSlice';
import {  getFilter } from 'redux/selectors';
const Filter = () => {
	const filter = useSelector(getFilter);
	// const handleFilterContact = () => {
	// 	return contacts.filter(item => {
	// 	  return item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim()) || item.number.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
	// 	})
	//   }
	
	const dispatch = useDispatch();
	const handleChange = e => {
	  dispatch(setFilterValue(e.target.value));
	};

	return (
		<div className={cssModule.filter}>
			<h2>Find contacts by name</h2>
			<TextField
				onChange={handleChange}
				value={filter}
				id="standard-basic" label="Name?" variant="standard" />
		</div>
		
	)
}

export default Filter;
