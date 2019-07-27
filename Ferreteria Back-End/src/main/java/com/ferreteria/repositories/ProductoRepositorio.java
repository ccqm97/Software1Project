/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.repositories;

import com.ferreteria.ferreteria.Producto;
import java.io.Serializable;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author oscar
 */
public interface ProductoRepositorio extends Repository<Producto, Serializable> {
    
    List<Producto> findAll();
    Producto findOne(long id);
    Producto save(Producto p);
    Producto edit(Producto p);
    Producto delete(long id);
}
