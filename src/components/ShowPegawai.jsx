import React, {useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'; 
import {getPegawai, pegawaiSelectors, deletePegawai } from '../features/counter/pegawaiSlice';  
import { Link } from 'react-router-dom'; 

const ShowPegawai = () => {  

  const dispatch = useDispatch(); 
  const pegawai = useSelector(pegawaiSelectors.selectAll); 
  useEffect(() => { 
    dispatch (getPegawai ()) 
  }, [dispatch]); 

  // console.log(pegawai) 
  return (  
    <div className='box mt-5'> 
    <Link to ="add" className= 'button is-success'>Add New</Link>
    <table className='table is-striped is-fullwidth'>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th> 
          <th>Provinsi</th> 
          <th>Kabupaten</th> 
          <th>Kecamatan</th> 
          <th>Kelurahan</th> 
          <th>ID</th> 
          <th>Actions</th> 
        </tr>
      </thead> 
      <tbody> 
        { pegawai.map ((dataPegawai, index) => ( 
          <tr key={dataPegawai.id}>
          <td>{index + 1} </td> 
          <td>{dataPegawai.nama}</td> 
          <td>{dataPegawai.provinsi} </td> 
          <td>{dataPegawai.kabupaten}</td> 
          <td>{dataPegawai.kecamatan}</td> 
          <td>{dataPegawai.kelurahan}</td>
          <td>{dataPegawai.id}</td>
          <td>
          <Link to = {`edit/${dataPegawai.id}`} className='button is-info is small'>Edit</Link> 
          <button onClick = {() => dispatch(deletePegawai(dataPegawai.id))} className='button is-danger is small'>Delete</button> 
          </td>
        </tr>
        ))} 

      </tbody>
    </table> 
    </div>
  )
}

export default ShowPegawai