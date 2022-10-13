import React, { useState } from "react";
import { useDispatch } from 'react-redux'; 
import {savePegawai} from '../features/counter/pegawaiSlice'; 
import { useNavigate } from 'react-router-dom'; 

const AddPegawai = () => {
  const [nama, setNama] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [id, setId] = useState(""); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

    const createPegawai = async (e) => { 
        e.preventDefault(); 
        await dispatch(savePegawai({nama, provinsi, kabupaten, kecamatan, kelurahan, id})); 
        navigate('/'); 
    }

  return (
    <div>
      <form onSubmit={createPegawai} className="box mt-5">
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
          <label className="label">ID</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Id" 
            value={id} 
            onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPegawai;
