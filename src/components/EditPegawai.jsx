import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPegawai, updatePegawai, pegawaiSelectors } from "../features/counter/pegawaiSlice";
import { useDispatch, useSelector } from 'react-redux'; 

const EditPegawai = () => {
  const [nama, setNama] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const { id } = useParams(); 

  const pegawai = useSelector((state) => pegawaiSelectors.selectById(state, id)); 

  useEffect (() => { 
    dispatch (getPegawai());  
  }, [dispatch]); 

  useEffect (() => { 
    if(pegawai) { 
      setNama(pegawai.nama); 
      setProvinsi(pegawai.provinsi); 
      setKabupaten(pegawai.kabupaten); 
      setKecamatan(pegawai.kecamatan); 
      setKelurahan(pegawai.kelurahan); 
    }
  }, [pegawai]);

  const handleUpdate = async (e) => { 
    e.preventDefault (); 
    await dispatch (updatePegawai({nama, provinsi, kabupaten, kecamatan, kelurahan})); 
    navigate ('/');
  }

  return (
    <div>
      <form onSubmit = {handleUpdate} className="box mt-5">
        <div className="field">
          <label className="label">Nama</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Nama" 
            value={nama} 
            onChange={(e) => setNama(e.target.value)} 
            /> 
          </div>
        </div>
        <div className="field">
          <label className="label">Provinsi</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Provinsi" 
            value={provinsi} 
            onChange={(e) => setProvinsi(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Kabupaten</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Kabupaten" 
            value={kabupaten} 
            onChange={(e) => setKabupaten(e.target.value)}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Kecamatan</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Kecamatan" 
            value={kecamatan} 
            onChange={(e) => setKecamatan(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Kelurahan</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Kelurahan" 
            value={kelurahan} 
            onChange={(e) => setKelurahan(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success">Update</button>
        </div>
      </form>
    </div>
  ); 
}; 
export default EditPegawai; 
