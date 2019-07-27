/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.servicesIMP;

import com.ferreteria.ferreteria.Producto;
import com.ferreteria.repositories.ProductoRepositorio;
import com.ferreteria.services.ProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author oscar
 */
public class ProductoServiceIMP implements  ProductoService{

    @Autowired
    private ProductoRepositorio pr;
    
    @Override
    public List<Producto> list() {
        return pr.findAll();
    }

    @Override
    public Producto listId(long id) {
        return pr.findOne(id);
    }

    @Override
    public Producto add(Producto producto) {
        return pr.save(producto);
    }

    @Override
    public Producto edit(Producto producto) {
        return pr.edit(producto);
    }

    @Override
    public Producto delete(long id) {
        return pr.delete(id);
    }
    
}
