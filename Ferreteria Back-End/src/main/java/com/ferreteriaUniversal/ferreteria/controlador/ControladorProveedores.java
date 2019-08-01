/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.controlador;

import com.ferreteriaUniversal.ferreteria.model.Proveedor;
import com.ferreteriaUniversal.ferreteria.service.ProveedorService;
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
@RequestMapping({"/proveedores"})
public class ControladorProveedores {
    
    @Autowired
    ProveedorService proveedorService;

    @GetMapping
    public List<Proveedor> listar(){
       return proveedorService.list();
    }
  
    @PostMapping
    public Proveedor agregar(@RequestBody Proveedor proveedor){
        return proveedorService.add(proveedor);
    }
    
     @GetMapping(path = {"/{nitProveedor}"})
    public Proveedor listarId(@PathVariable("nitProveedor") int nitProveedor){
       return proveedorService.listNIT(nitProveedor);
    }
    
    @PutMapping(path ={"/{nitProveedor}"})
    public Proveedor editar(@RequestBody Proveedor proveedor, @PathVariable("nitProveedor") int nitProveedor){
        proveedor.setNitProveedor(nitProveedor);
        return proveedorService.edit(proveedor);
    }
    
    @DeleteMapping(path = {"/{nitProveedor}"})
    public Proveedor delete(@PathVariable("nitProveedor") int nitProveedor){
        return proveedorService.delete(nitProveedor);
    }
}