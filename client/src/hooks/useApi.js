import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosBuilds'

const useApi = (typeString, props) => {
  const [apiData, setApiData] = useState()

  const fireApi = () => {
    switch (typeString){
      case 'get':
        axiosWithAuth.get('http://localhost:5000/api/colors')
          .then(res => {
            setApiData(res.data)
          })
        return
      case 'put':
        if (!props || !props.colorToEdit) return
        axiosWithAuth.put(`http://localhost:5000/api/colors/${props.colorToEdit.id}`, props.colorToEdit)
          .then(res => {
            setApiData(res.data)
          })
        return
      case 'delete':
        if (!props || !props.color) return
        axiosWithAuth.delete(`http://localhost:5000/api/colors/${props.color.id}`)
          .then(res => {
            console.log(res.data)
            setApiData(res.data)
          })
    }
  }
  
  return [apiData, fireApi]
}
export default useApi