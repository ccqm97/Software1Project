/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.serviceImp;

import com.ferreteriaUniversal.ferreteria.model.Proveedor;
import com.ferreteriaUniversal.ferreteria.repositorio.ProveedorRepositorio;
import com.ferreteriaUniversal.ferreteria.service.ProveedorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProveedorServiceImpl implements ProveedorService {
    
    @Autowired
    private ProveedorRepositorio proveedorRepositorio;

    @Override
    public List<Proveedor> list() {
        return proveedorRepositorio.findAll();
    }
    
    @Override
    public Proveedor add(Proveedor proveedor) {
        return proveedorRepositorio.save(proveedor);
    }

    @Override
    public Proveedor listNIT(long id) {
        return proveedorRepositorio.findOne(id);
    }

    @Override
    public Proveedor edit(Proveedor proveedor) {
        return proveedorRepositorio.save(proveedor);
    }

    @Override
    public Proveedor delete(long id) {
        Proveedor proveedor =proveedorRepositorio.findOne(id);
        if (proveedor != null) {
            proveedorRepositorio.delete(proveedor);
        }
        return proveedor;
    }
    
    
    
}
