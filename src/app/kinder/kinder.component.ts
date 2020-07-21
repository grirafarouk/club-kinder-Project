import { Location } from '@angular/common';
import { kindergarten } from '../models/kindergarten';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';
import { kinderService } from '../kinder.service';

@Component({
  selector: 'app-kinder',
  templateUrl: './kinder.component.html',
  styleUrls: ['./kinder.component.css']
})
export class kinderComponent implements OnInit {

  @ViewChild('kinderModal', { static: false })
  public kinderModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  listkinder: any[];

  kinder: kindergarten;
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private router:Router,  private cokie:CookieService,private location:Location,

    private kinderservice: kinderService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.kinder = new kindergarten();
    this.kinderservice.getAl2l().then(data => {
      this.listkinder = data.kindergartens
      console.log("hhhhhhhhhhhh" + data.owners)
    })}


  showDeleteModal(kinder: any): any {
    this.kinder = Object.assign({}, kinder);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.kinder.id != null) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.kinderModal.show();
  }

  createkinder() {
  
    this.kinderservice.ajout(this.kinder)
      this.ngOnInit();
        this.notifierService.notify("success", "produit ajouté avec succés !")
    
    this.kinderModal.hide();
  }

  showEditModal(kinder: any) {
    this.kinder = Object.assign({}, kinder);
    this.kinder.address=kinder.adsress;
    this.kinder.avalability=kinder.avalability;
    this.kinder.capacity=kinder.capacity;
    this.kinder.description = kinder.description;
    this.kinder.doucmentEvidenceTva=kinder.doucmentEvidenceTva;
    this.kinder.name=kinder.name;
    this.kinder.ratingNote = kinder.ratingNote;
    if (this.kinder.id != null) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.kinderModal.show();

  }
  

  updatekinder() {
    this.kinderservice.ajout
      this.ngOnInit();
      
        this.notifierService.notify("success", "kinder modifié avec succés !")
      
    this.kinderModal.hide();
  }

public retoure(){

this.location.back();

}
savekinder() {
    let error = false;

    if (!error) {
      if (this.kinder.id != null)
        this.updatekinder();
      else this.createkinder();
    }
  }
  delete() {
    this.kinderservice.deletekinder(this.kinder.id)
      this.ngOnInit();
      this.notifierService.notify("success", "kinder Supprimer avec succés !")

    
    this.deleteModal.hide();
  }
  
  reset() {
    this.kinder = new kindergarten();
  }
  
  
}
