import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  home = {
    title: "Home",
    route: "/",
    icon: "home"
  }

  vote = {
    title: "Vote",
    route: "/vote",
    icon: "where_to_vote"
  }

  leaderboard = {
    title: "Leaderboard",
    route: "/leaderboard",
    icon: "star"
  }

  routes = [this.home,this.vote,this.leaderboard]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
