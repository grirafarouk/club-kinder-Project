import { kinderService } from '../kinder.service';
import { owner } from './../models/owner';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClubService } from '../club.service';
import { club } from '../models/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class clubComponent implements OnInit {

  @ViewChild('clubModal', { static: false })
  public clubModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  listclub: any[];
  commandelist:any[];
  club: club;
  owner: owner = new owner();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private clubss:ClubService,private router:Router,  private cokie:CookieService,private location:Location,

    private clubService: UserService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.clubss.getAl2l().then(data => {
    this.listclub = data.clubs
    })}
  
  public verifier (){
  }

  showDeleteModal(owner: any): any {
    this.club = Object.assign({}, owner);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.club.id != null) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.clubModal.show();
  }

  createclub() {
   
    this.clubss.ajout(this.club)
      this.ngOnInit();
      
        this.notifierService.notify("success", "club ajouté avec succés !")
      
    this.clubModal.hide();
  }

  showEditModal(club: any) {
    this.club = Object.assign({}, club);
  
    if (this.club.id>0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.clubModal.show();

  }
  public getowner():any{
    let owner:any
return this.cokie.get('profil');
  }

  updateclub() {
    this.clubss.ajout(this.club);
      
        this.notifierService.notify("success", "club  modifié avec succés !")
      
    this.clubModal.hide();
  }

public retoure(){

this.location.back();

}
   saveclub() {
    let error = false;

    if (!error) {
      if (this.club.id != null)
        this.updateclub();
      else this.createclub();
    }
  }
  delete() {
    this.clubss.deleteclub(this.club.id);
     this.ngOnInit();
      this.notifierService.notify("success", "club Supprimer avec succés !")

    this.deleteModal.hide();
  }
  reset() {
    this.club = new club();
  }
}
