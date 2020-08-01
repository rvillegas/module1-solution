(function (){
 'use strict';

    angular.module('myModule1Solution',[])

    .controller('ITController', ITController);
    
    ITController.$inject = ['$scope'];
    function ITController($scope){
        $scope.message="Empty";
        $scope.items=""
        $scope.checkQty= function(){
            var str=$scope.items;
            var cnt=0;
            var items=[]
            //var tmpItems=[]
            //console.log(str.length)
            if (str.length>0)
                {
                    items=str.split(','); 
                    for (var idx in items)
                    {
                        if (items[idx].trim().length>0) 
                        {  
                            ++cnt;
                            //tmpItems.push(items[idx]);
                        }
                    }                    
                }
            //items=tmpItems;
            console.log(cnt);
            console.log(items);

            return cnt;
        }
        $scope.setMsg= function() {

            if ($scope.items.length==0)$scope.message="Please enter data first";
            else {
                var cnt=$scope.checkQty();
                if (cnt==0) $scope.message="Please enter data first";
                else if (cnt<=3) $scope.message="Enjoy!";
                else $scope.message="Too much!";
            }
        }
       
    }
})();