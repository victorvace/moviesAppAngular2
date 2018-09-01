import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})

export class SerieDetailsComponent implements OnInit {

  public serie: any = {};

  constructor(private route: ActivatedRoute, private movieService: MovieDbService) {

  }

  ngOnInit() {
    this.getSerie();
  }

  getSerie(): void {
    console.log(this.route);
    const id = +this.route.snapshot.params.id;
    console.log(id);
    this.movieService.getSerie(id)
      .subscribe(serie => {
        this.serie = serie;
        console.log('Dentro de la petición ->' + JSON.stringify(this.serie));
      });
  }

}
