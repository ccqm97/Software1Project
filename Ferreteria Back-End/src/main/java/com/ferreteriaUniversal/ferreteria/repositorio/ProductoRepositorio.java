/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.repositorio;

import com.ferreteriaUniversal.ferreteria.model.Producto;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Viviana
 */
public interface ProductoRepositorio extends Repository <Producto, Long>{
    List<Producto> findAll();
    Producto findOne(long id);
    Producto save(Producto producto);
    void delete(Producto producto);
    @Query(value="select p from productos p where p.nombre_producto =?1",nativeQuery = true)
    List<Producto> findByName(String nombreProducto);
}