/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.serviceImp;

import com.ferreteriaUniversal.ferreteria.model.Factura;
import com.ferreteriaUniversal.ferreteria.repositorio.FacturaRepositorio;
import com.ferreteriaUniversal.ferreteria.service.FacturaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacturaServiceImpl implements FacturaService {

    @Autowired
    private FacturaRepositorio facturaRepositorio;
    
    @Override
    public List<Factura> list() {
        return facturaRepositorio.findAll();
    }

    @Override
    public Factura listId(long id) {
        return facturaRepositorio.findOne(id);
    }

    @Override
    public Factura add(Factura factura) {
        return facturaRepositorio.save(factura);
    }

    @Override
    public Factura edit(Factura factura) {
        return facturaRepositorio.save(factura);
    }

    @Override
    public Factura delete(long id) {
        Factura factura =facturaRepositorio.findOne(id);
        if (factura != null) {
            facturaRepositorio.delete(factura);
        }
        return factura;
    }
}
