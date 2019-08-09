/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.controlador;

import com.ferreteriaUniversal.ferreteria.model.Producto;
import com.ferreteriaUniversal.ferreteria.service.ProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Viviana
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/productos"})
public class ControladorProducto {
    
    @Autowired
    ProductoService productoService;

    @GetMapping
    public List<Producto> listar(){
       return productoService.list();
    }
  
    @PostMapping
    public Producto agregar(@RequestBody Producto producto){
        return productoService.add(producto);
    }
    
     @GetMapping(path = {"/{idProducto}"})
    public Producto listarId(@PathVariable("idProducto") long nitProveedor){
       return productoService.listID(nitProveedor);
    }
    
    @PutMapping(path ={"/{idProducto}"})
    public Producto editar(@RequestBody Producto producto, @PathVariable("idProducto") long idProducto){
        return productoService.edit(producto);
    }
    
    @DeleteMapping(path = {"/{idProducto}"})
    public Producto delete(@PathVariable("idProducto") long nitProveedor){
        return productoService.delete(nitProveedor);
    }
}
