/// <referance path="../_all" />

module App {
    "use strict";
    
    interface IWikiScope extends ng.IScope {
        title: string;
    }

    export class WikiCtrl {
        public static $inject = [
            '$scope'
        ];
        
        constructor(private $scope: IWikiScope) {
           
            $scope.title = 'Wikipedia';
            
        }
    }
}
