/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.servicesIMP;

import com.ferreteria.ferreteria.Proveedor;
import com.ferreteria.repositories.ProveedorRepositorio;
import com.ferreteria.services.ProveedorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Viviana
 */
public class ProveedorServiceIMP implements ProveedorService{

    @Autowired
    private ProveedorRepositorio repositorio;
    
    @Override
    public List<Proveedor> list() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Proveedor listNIT(long id) {
        return repositorio.findOne(id);
    }

    @Override
    public Proveedor add(Proveedor proveedor) {
        return repositorio.save(proveedor);
    }

    @Override
    public Proveedor edit(Proveedor proveedor) {
        return  repositorio.save(proveedor);
    }

    @Override
    public Proveedor delete(long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }   
}