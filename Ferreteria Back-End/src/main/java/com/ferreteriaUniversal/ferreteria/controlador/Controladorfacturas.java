/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.controlador;

import com.ferreteriaUniversal.ferreteria.model.Factura;
import com.ferreteriaUniversal.ferreteria.service.FacturaService;
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
@RequestMapping({"/facturas"})
public class ControladorFacturas {
    
    @Autowired
    FacturaService facturaService;
    ProveedorService proveedorService;
    
    @GetMapping
    public List<Factura> listar(){
       return facturaService.list();
    }
  
    @PostMapping
    public Factura agregar(@RequestBody Factura factura){
        return facturaService.add(factura);
    }
    
     @GetMapping(path = {"/{idFactura}"})
    public Factura listarId(@PathVariable("idFactura") int idFactura){
       return facturaService.listId(idFactura);
    }
    
    @PutMapping(path ={"/{idFactura}"})
    public Factura editar(@RequestBody Factura factura, @PathVariable("idFactura") int idFactura){
        factura.setIdFactura(idFactura);
        return facturaService.edit(factura);
    }
    
    @DeleteMapping(path = {"/{idFactura}"})
    public Factura delete(@PathVariable("idFactura") int idFactura){
        return facturaService.delete(idFactura);
    }
}