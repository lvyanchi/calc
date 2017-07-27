
import Cal from '../components/OnlineCalculator'
import Rel from '../components/Relative'
import Yie from '../components/YieldCal'
import Yeb from '../components/nab/Yeb'
import ZZ from '../components/nab/ZZ'
import MG from '../components/nab/MG'
export default{
routes:[
    {path:'/OnlineCalculator', component:Cal},
    {path:'/Relative', component:Rel},
    {path:'/YieldCal', component:Yie},
    {path:'/Yeb', component:Yeb},
    {path:'/ZZ', component:ZZ},
    {path:'/MG', component:MG},
    {path: '*', redirect:'/OnlineCalculator'}
  ]
}
