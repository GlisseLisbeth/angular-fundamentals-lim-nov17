import {Component, OnInit} from '@angular/core';
import "rxjs/add/operator/map";
import {GithubService} from "../github-service.service";

// import {environment} from "../../environments/environment";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  blog;
  location;
  sumate;

  result;

  constructor(private service: GithubService) {
  }

  ngOnInit() {
    // this.http.get<any>(environment.API + 'Laboratoria')
    //   .map(res => {
    //     res.sumate = res.email;
    //     return res;
    //   })
    //   .subscribe(
    //     (res: IResponse) => {
    //       this.blog = res.blog;
    //       this.location = res.location;
    //       this.sumate = res.sumate;
    //     }
    //   );

    this.service.getResult().subscribe(res => {
      console.log('res: ', res);
      this.result = res.result / 2;
    });
  }


}

interface IResponse {
  blog: string;
  location: string;
  sumate: string;
}
