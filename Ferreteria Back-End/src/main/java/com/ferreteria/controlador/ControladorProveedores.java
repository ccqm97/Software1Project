/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.controlador;

import com.ferreteria.ferreteria.Proveedor;
import com.ferreteria.services.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Viviana
 */

@CrossOrigin(origins = "http://localhost:4200/mostrarProveedores", maxAge = 3600)
@RestController
@RequestMapping({"/proveedores"})

public class ControladorProveedores {
    
    @Autowired
    ProveedorService proveedorService;

     @PostMapping
    public Proveedor agregarProvedor(@RequestBody Proveedor p){
        return proveedorService.add(p);
    }
    
    @GetMapping({"/nitProveedor"}) 
    public Proveedor listarNit(@PathVariable("nitProveedor")long nitproveedor ){
        return proveedorService.listNIT(nitproveedor);
    }
    
    @GetMapping({"/nitProveedor"}) 
    public Proveedor editar(@RequestBody Proveedor proveedor, @PathVariable("nitProveedor") long nitproveedor){
        proveedor.setNitProveedor(nitproveedor);
        return proveedorService.edit(proveedor);
    }
}