import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';
import { Location } from '@angular/common';
import { owner } from '../models/owner';
import { UserService } from '../user.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class ownerComponent implements OnInit {

  @ViewChild('ownerModal', { static: false })
  public ownerModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  listowner: any[];
  listowner2: any[];

  ownere: owner;
  owner: owner = new owner();
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private users: UserService, private router: Router, private cokie: CookieService, private location: Location,

    private notifierService: NotifierService,
  ) { }
  listo: any[];
  ngOnInit(): void {
    
    this.ownere = new owner();
    this.users.getAl2l().then(data => {
      this.listowner = data.owners
      console.log("hhhhhhhhhhhh" + data.owners)
    })
  }


  showDeleteModal(owner: any): any {
    this.ownere = Object.assign({}, owner);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.ownere.id != null) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.ownerModal.show();
  }

  createowner() {
    console.log(this.ownere)
    this.ownere.createdAt=null
    this.users.ajout(this.ownere)
      this.ngOnInit();
        this.notifierService.notify("success", "owner ajouté avec succés !")
    
    this.ownerModal.hide();
  }

  showEditModal(owner: any) {
  this.ownere = Object.assign({}, owner);
   this.ownere.first_name = owner.firstName;
   this.ownere.last_name = owner.lastName;
    if (this.ownere.id != null) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.ownerModal.show();

  }


  updateowner() {
    this.users.ajout(this.ownere);
      this.ngOnInit();
        this.notifierService.notify("success", "owner  modifié avec succés !")
      this.ownerModal.hide();
  }

  public retoure() {

    this.location.back();

  }
  saveowner() {
    let error = false;

    if (!error) {
      if (this.ownere.id != null)
        this.updateowner();
      else this.createowner();
    }
  }
  delete() {
      this.ngOnInit();
      this.notifierService.notify("success", "owner Supprimer avec succés !")

  
    this.deleteModal.hide();
  }
  reset() {
    this.ownere = new owner();
  }


}
