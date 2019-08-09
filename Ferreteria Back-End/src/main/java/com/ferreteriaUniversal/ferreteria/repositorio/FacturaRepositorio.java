/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.repositorio;

import com.ferreteriaUniversal.ferreteria.model.Factura;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Viviana
 */
public interface FacturaRepositorio extends Repository <Factura , Long> {
    
    List<Factura> findAll();
    Factura findOne(long id);
    Factura save(Factura proveedor);
    void delete(Factura proveedor);
    
}
