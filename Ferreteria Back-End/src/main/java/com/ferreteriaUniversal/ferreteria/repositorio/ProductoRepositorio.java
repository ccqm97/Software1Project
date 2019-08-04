/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.repositorio;

import com.ferreteriaUniversal.ferreteria.model.Producto;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Viviana
 */
public interface ProductoRepositorio extends Repository <Producto, Integer>{
    List<Producto> findAll();
    Producto findOne(int id);
    Producto save(Producto producto);
    void delete(Producto producto);   
}