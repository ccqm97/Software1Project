/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.repositories;

import com.ferreteria.ferreteria.Proveedor;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Viviana
 */
public interface ProveedorRepositorio extends Repository <Proveedor , Integer> {
    
       
    List<Proveedor> findAll();
    Proveedor findOne(long id);
    Proveedor save(Proveedor p);
    Proveedor edit(Proveedor p);
    Proveedor delete(long id);
    
}
