'use client'
import React, { useEffect, useState } from "react";
import climaService from './services/climaSercive';

export default function Controlador() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  async function getWeatherInfo(){    
    let info = await climaService.getInfo();    
    setData(info)
    setLoading(false);
  }

  useEffect(() => {
    getWeatherInfo()
  }, []);

  return { data, loading };
}
