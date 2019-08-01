/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.repositorio;

import com.ferreteriaUniversal.ferreteria.model.Proveedor;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Viviana
 */
public interface ProveedorRepositorio extends Repository <Proveedor , Integer> {
    
    List<Proveedor> findAll();
    Proveedor findOne(int id);
    Proveedor save(Proveedor proveedor);
    void delete(Proveedor proveedor);
}
