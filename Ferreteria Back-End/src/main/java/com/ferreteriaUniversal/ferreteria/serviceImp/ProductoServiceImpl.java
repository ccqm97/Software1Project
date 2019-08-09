/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.serviceImp;

import com.ferreteriaUniversal.ferreteria.model.Producto;
import com.ferreteriaUniversal.ferreteria.repositorio.ProductoRepositorio;
import com.ferreteriaUniversal.ferreteria.service.ProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Viviana
 */
@Service
public class ProductoServiceImpl implements ProductoService{
     @Autowired
    private ProductoRepositorio productoRepositorio;

     @Override
    public List<Producto> list() {
        return productoRepositorio.findAll();
    }
    
    @Override
    public Producto add(Producto Producto) {
        return productoRepositorio.save(Producto);
    }

    @Override
    public Producto listID(long id) {
        return productoRepositorio.findOne(id);
    }

    @Override
    public Producto edit(Producto producto) {
        return productoRepositorio.save(producto);
    }

    @Override
    public Producto delete(long id) {
        Producto producto =productoRepositorio.findOne(id);
        if (producto != null) {
            productoRepositorio.delete(producto);
        }
        return producto;
    }

	@Override
	public List<Producto> findByName(String nombreProducto) {
		return productoRepositorio.findByName(nombreProducto);
	}
}
