/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.serviceImp;

import com.ferreteriaUniversal.ferreteria.model.AsesorComercial;
import com.ferreteriaUniversal.ferreteria.repositorio.AsesorComercialRepositorio;
import com.ferreteriaUniversal.ferreteria.service.AsesorComercialService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


public class AsesorComercialServiceImpl implements AsesorComercialService {

    @Autowired
    private AsesorComercialRepositorio asesorComercialRepositorio;
     
    @Override
    public List<AsesorComercial> list() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public AsesorComercial listId(long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public AsesorComercial add(AsesorComercial asesorComercial) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public AsesorComercial edit(AsesorComercial asesorComercial) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public AsesorComercial delete(long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
