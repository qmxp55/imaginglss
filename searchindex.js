Search.setIndex({envversion:46,filenames:["allmodules","datamodel","examples","helpers","imaginglss","imaginglss.analysis","imaginglss.analysis.cuts","imaginglss.analysis.gen_random","imaginglss.model","imaginglss.model.brick","imaginglss.model.brickindex","imaginglss.model.catalogue","imaginglss.model.datarelease","imaginglss.model.imagerepo","imaginglss.model.schema","imaginglss.model.sfdmap","imaginglss.utils","imaginglss.utils.columnstore","imaginglss.utils.euler","imaginglss.utils.fits","imaginglss.utils.fsarray","imaginglss.utils.kdtree","imaginglss.utils.sharedmem","imaginglss.utils.sharedmem.backends","imaginglss.utils.sharedmem.background","imaginglss.utils.sharedmem.mapreduce","imaginglss.utils.sharedmem.memory","imaginglss.utils.sharedmem.parallel","imaginglss.utils.sharedmem.pool","imaginglss.utils.wcs_simplezea","imaginglss.utils.wcs_tangent","index","install","modules","sharedmem"],objects:{"":{imaginglss:[4,8,0,"-"]},"imaginglss.analysis":{cuts:[6,8,0,"-"],gen_random:[7,8,0,"-"]},"imaginglss.analysis.cuts":{Completeness:[6,10,1,""],Cuts:[6,10,1,""],Fluxes:[6,10,1,""],findlim:[6,11,1,""]},"imaginglss.analysis.cuts.Completeness":{BGS:[6,13,1,""],ELG:[6,13,1,""],LRG:[6,13,1,""],QSO:[6,13,1,""]},"imaginglss.analysis.cuts.Fluxes":{BGS:[6,13,1,""],ELG:[6,13,1,""],LRG:[6,13,1,""],QSO:[6,13,1,""]},"imaginglss.analysis.gen_random":{fill:[7,11,1,""]},"imaginglss.model":{brick:[9,8,0,"-"],brickindex:[10,8,0,"-"],catalogue:[11,8,0,"-"],datarelease:[12,8,0,"-"],imagerepo:[13,8,0,"-"],schema:[14,8,0,"-"],sfdmap:[15,8,0,"-"]},"imaginglss.model.brick":{Brick:[9,10,1,""]},"imaginglss.model.brick.Brick":{query:[9,9,1,""],readout:[9,9,1,""],revert:[9,9,1,""]},"imaginglss.model.brickindex":{BrickIndex:[10,10,1,""]},"imaginglss.model.brickindex.BrickIndex":{build:[10,9,1,""],get_brick:[10,9,1,""],get_bricks:[10,9,1,""],optimize:[10,9,1,""],query:[10,9,1,""],search_by_id:[10,9,1,""],search_by_name:[10,9,1,""]},"imaginglss.model.catalogue":{Catalogue:[11,10,1,""],coord2xyz:[11,11,1,""],uppercase_dtype:[11,11,1,""]},"imaginglss.model.catalogue.Catalogue":{fetch:[11,9,1,""],neighbours:[11,9,1,""]},"imaginglss.model.datarelease":{DataRelease:[12,10,1,""],Footprint:[12,10,1,""],Lazy:[12,10,1,""],contains:[12,11,1,""]},"imaginglss.model.datarelease.DataRelease":{readout:[12,9,1,""]},"imaginglss.model.datarelease.Footprint":{filter:[12,9,1,""]},"imaginglss.model.imagerepo":{ImageRepo:[13,10,1,""]},"imaginglss.model.imagerepo.ImageRepo":{get_filename:[13,9,1,""],metadata:[13,9,1,""],open:[13,9,1,""],preload:[13,9,1,""]},"imaginglss.model.schema":{DR1:[14,10,1,""],DR1J:[14,10,1,""],EDR3:[14,10,1,""],EDR4:[14,10,1,""],EDR:[14,10,1,""],Schema:[14,10,1,""]},"imaginglss.model.schema.EDR":{BRICKS_FILENAME:[14,13,1,""],CATALOGUE_ALIASES:[14,13,1,""],format_catalogue_filename:[14,12,1,""],format_image_filenames:[14,12,1,""],parse_filename:[14,12,1,""]},"imaginglss.model.schema.EDR3":{BRICKS_FILENAME:[14,13,1,""],CATALOGUE_ALIASES:[14,13,1,""],format_catalogue_filename:[14,12,1,""],format_image_filenames:[14,12,1,""],parse_filename:[14,12,1,""]},"imaginglss.model.schema.EDR4":{CATALOGUE_ALIASES:[14,13,1,""]},"imaginglss.model.sfdmap":{SFDMap:[15,10,1,""]},"imaginglss.model.sfdmap.SFDMap":{bilinear_interp_nonzero:[15,12,1,""],ebv:[15,9,1,""],extinction:[15,9,1,""],extinctions:[15,13,1,""]},"imaginglss.utils":{columnstore:[17,8,0,"-"],euler:[18,8,0,"-"],fits:[19,8,0,"-"],fsarray:[20,8,0,"-"],kdtree:[21,8,0,"-"],sharedmem:[22,8,0,"-"],wcs_simplezea:[29,8,0,"-"],wcs_tangent:[30,8,0,"-"]},"imaginglss.utils.columnstore":{ColumnStore:[17,10,1,""],DiskColumnStore:[17,10,1,""]},"imaginglss.utils.columnstore.ColumnStore":{updatedtype:[17,9,1,""]},"imaginglss.utils.columnstore.DiskColumnStore":{forget:[17,9,1,""],getfilename:[17,9,1,""]},"imaginglss.utils.euler":{euler:[18,11,1,""]},"imaginglss.utils.fits":{read_image:[19,11,1,""],read_metadata:[19,11,1,""],read_table:[19,11,1,""]},"imaginglss.utils.fsarray":{ElasticArray:[20,10,1,""]},"imaginglss.utils.fsarray.ElasticArray":{dtype:[20,13,1,""],extend:[20,9,1,""],fromfile:[20,15,1,""],fromndarray:[20,15,1,""],keys:[20,9,1,""],select:[20,9,1,""],tofile:[20,9,1,""],tondarray:[20,9,1,""]},"imaginglss.utils.kdtree":{KDtree:[21,10,1,""]},"imaginglss.utils.kdtree.KDtree":{TreeNode:[21,10,1,""],kdtree:[21,9,1,""],simplesearch:[21,9,1,""],treelist:[21,9,1,""]},"imaginglss.utils.sharedmem":{backends:[23,8,0,"-"],background:[24,8,0,"-"],mapreduce:[25,8,0,"-"],memory:[26,8,0,"-"],parallel:[27,8,0,"-"],pool:[28,8,0,"-"]},"imaginglss.utils.sharedmem.backends":{ProcessBackend:[23,10,1,""],ProcessGroup:[23,10,1,""],SlaveException:[23,14,1,""],StopProcessGroup:[23,14,1,""],ThreadBackend:[23,10,1,""],cpu_count:[23,11,1,""],get_debug:[23,11,1,""],set_debug:[23,11,1,""],total_memory:[23,11,1,""]},"imaginglss.utils.sharedmem.backends.ProcessBackend":{EventFactory:[23,12,1,""],LockFactory:[23,12,1,""],QueueFactory:[23,12,1,""],SlaveFactory:[23,12,1,""],StorageFactory:[23,12,1,""]},"imaginglss.utils.sharedmem.backends.ProcessGroup":{get:[23,9,1,""],get_exception:[23,9,1,""],is_alive:[23,9,1,""],join:[23,9,1,""],killall:[23,9,1,""],put:[23,9,1,""],start:[23,9,1,""]},"imaginglss.utils.sharedmem.backends.ThreadBackend":{EventFactory:[23,12,1,""],LockFactory:[23,12,1,""],QueueFactory:[23,13,1,""],SlaveFactory:[23,12,1,""],StorageFactory:[23,13,1,""]},"imaginglss.utils.sharedmem.background":{background:[24,10,1,""]},"imaginglss.utils.sharedmem.background.background":{closure:[24,9,1,""],wait:[24,9,1,""]},"imaginglss.utils.sharedmem.mapreduce":{MapReduce:[25,10,1,""],MapReduceByThread:[25,11,1,""]},"imaginglss.utils.sharedmem.mapreduce.MapReduce":{main:[25,9,1,""],map:[25,9,1,""]},"imaginglss.utils.sharedmem.memory":{copy:[26,11,1,""],empty:[26,11,1,""],empty_like:[26,11,1,""]},"imaginglss.utils.sharedmem.parallel":{Parallel:[27,10,1,""],ParallelException:[27,14,1,""]},"imaginglss.utils.sharedmem.parallel.Parallel":{barrier:[27,9,1,""],forloop:[27,9,1,""]},"imaginglss.utils.sharedmem.pool":{Pool:[28,10,1,""],TPool:[28,10,1,""]},"imaginglss.utils.wcs_simplezea":{ang2pix:[29,11,1,""],ang2pix_hdr:[29,11,1,""],pix2ang:[29,11,1,""],pix2ang_hdr:[29,11,1,""]},"imaginglss.utils.wcs_tangent":{ang2pix:[30,11,1,""],ang2pix_hdr:[30,11,1,""],pix2ang:[30,11,1,""],pix2ang_hdr:[30,11,1,""]},imaginglss:{analysis:[5,8,0,"-"],model:[8,8,0,"-"],utils:[16,8,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"10":["np","class","Python class"],"11":["np","function","Python function"],"12":["np","staticmethod","Python static method"],"13":["np","attribute","Python attribute"],"14":["np","exception","Python exception"],"15":["np","classmethod","Python class method"],"2":["py","class","Python class"],"3":["py","function","Python function"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"],"7":["py","classmethod","Python class method"],"8":["np","module","Python module"],"9":["np","method","Python method"]},objtypes:{"0":"py:module","1":"py:method","10":"np:class","11":"np:function","12":"np:staticmethod","13":"np:attribute","14":"np:exception","15":"np:classmethod","2":"py:class","3":"py:function","4":"py:staticmethod","5":"py:attribute","6":"py:exception","7":"py:classmethod","8":"np:module","9":"np:method"},terms:{"0x7f1c6a5b4398":[],"0x7f1c6a5b4578":[],"0x7f8eefb63398":14,"0x7f8eefb63578":14,"0x7fefd1994140":[],"0x7fefd1994320":[],"2xn":9,"4804v2":15,"5x0":1,"__enter__":27,"__exit__":27,"__file__":2,"__init__":14,"_local":23,"boolean":[6,7,10,12,18,29,30],"case":[3,11,27,29],"catch":2,"class":[1,6,9,10,11,12,13,14,15,17,20,21,23,24,25,27,28],"default":[9,12,18,23,27,32],"export":[2,32],"float":[6,9,12],"function":[10,11,13,14,15,23,24,29,30,34],"import":[1,2,32,34],"int":[7,29],"new":[15,20,23,27],"return":[6,7,9,10,11,12,13,15,18,20,21,23,27,29,30,34],"static":[2,6,14,15,23,27],"throw":23,"true":[6,10,12,23,27,29,30],"try":[13,23],"var":27,"while":[29,30],aah3860:[29,30],aanda:[29,30],about:[2,10,13,23],abov:34,acces:[11,15],access:[1,11,12,15,27],accord:29,act:1,adapt:18,add:[13,18,27],addit:[1,32],after:[6,31,32],alia:23,alias:11,all:[12,21,23,27],alloc:[23,26],allow:6,alreadi:13,also:[1,3,12,13,31,32],although:29,amazonaw:[2,32],amount:23,analysi:[],ang2pix:[29,30],ang2pix_hdr:[29,30],ani:7,anoth:27,appli:[29,30],apporxim:10,aprun:2,area:[1,2,7,10,12],arg:[23,24,27],argument:6,around:1,arrai:[9,10,12,20,26,27],arrang:12,array_lik:[6,7,9,10,11,12,13,15,18,29,30],articl:[29,30],arxiv:15,associ:[1,11],assum:6,astro:18,astronomi:[29,30],astrophys:[29,30],astropi:32,astropys:29,async:24,asynchron:27,attribut:[1,6,9,12,15],automat:10,avail:23,b1950:18,backend:22,background:22,backward:[29,30],band:[1,6,12],barrier:27,base:[2,6,9,10,11,12,13,14,15,17,20,23,24,25,27,28,29,30,32],bash:2,basic:[2,32],becaus:[2,12,23,27],befor:32,better:[15,29],between:[3,18,27,34],beyond:15,biggest:27,bilinear_interp_nonzero:15,bin:2,binari:20,bit:2,blacklight:23,bleed:1,block:23,bound:6,boundari:7,brick:[],brick_primari:6,brickdata:10,brickid:10,brickindex:[],bricknam:10,bricks_filenam:14,brighter:6,brows:[29,30],build:10,bunch:27,busi:12,cach:[1,11,12,13,17,31,32],cachedir:11,calabretta:[29,30],calculate_funct:12,call:[6,9,29,30],can:[6,10,13,20,23,27,32],cardelli:15,care:1,cat:2,catalog:[1,2,11,12],catalogu:[],catalogue_alias:14,celesti:[18,29,30],center:[9,29,30],central:1,certain:6,chang:[10,14,18],check:[6,29,30],chunk:27,chunksiz:34,classmethod:20,clear:[1,23,31],closur:24,coad:1,coadd:12,code:[10,12,14,15,16,29,30,32],coeffcient:12,coeffici:15,collect:6,color:[2,6],column:[1,11,12,17,20],columnstor:[],com:[2,15,29,30,32,34],come:15,command:23,common:15,compact:21,compar:27,compat:[2,12],compens:30,complet:[2,6],comprens:2,concaten:[12,34],confid:6,consid:15,construct:[10,21,27],constructor:15,contain:[1,9,10,11,12,16,18],context:23,contigu:1,conveni:[6,12,29,30],convert:[1,11,18,29,30],coord2xyz:11,coord:[6,7,9,10,11,12,29,30],coord_in_footprint:12,coordin:[1,3,7,9,12,18,29,30],copi:[15,20,26],core:[23,32,34],corner:27,correct:[6,14],correspond:[6,9,11],cosmo:[2,32],count:23,cover:[1,7,12],cpu:23,cpu_count:23,creat:[1,10,23,27],creation:32,criterion:6,critic:27,crpix:[29,30],crval:[29,30],current:[6,13],curv:15,cut:2,daryl:18,datamodel:8,datareleas:2,dataset:[],date:31,deadlock:27,deal:[10,12],debug:[2,23],dec1:[1,9],dec2:[1,9],dec:[1,3,6,7,9,10,11,12,15,18,29,30],decal:[1,2,8,10,14,32],decals_cach:[2,32],decals_imag:[2,32],decam:[2,15,31,32],decam_extinct:14,decam_flux:12,decam_mw_transmiss:14,decemb:18,decim:[10,29,30],declear:27,decmax:12,decmin:12,decomposit:1,decompress:32,deep:6,def:[24,34],defin:[1,12,27],degre:[1,10,11,12,15,18,29,30],depenc:[],depend:[10,32],dependeci:3,deploi:32,depth:[1,6,12,21],derefer:26,deriv:15,describ:[29,30],desi:[2,6,15,31,32],desi_environ:2,desicach:[2,32],design:[29,30],dict:[6,12,13,15,29,30],dictionari:[12,13,29,30],differ:[10,15,27],dimens:21,directli:[11,15],directori:32,dirnam:2,disjoint:7,disk:11,diskcolumnstor:[11,17],displai:7,distort:[29,30],distribut:7,divid:10,doc:8,doe:[11,13,14,21,23,34],done:[23,29],down:21,download:32,dr1:[2,7,14,31],dr1j:[14,32],dstndstn:15,dtype:[11,17,20,26],due:31,dumb:34,dust:[6,29,32],dust_dir:32,dustdir:15,dynam:27,each:[1,9,10],earli:31,earlier:18,easili:6,easy_instal:32,ebv:15,eclipt:18,edr3:[2,14],edr4:14,edr:[2,14,31,32],effici:7,either:15,elast:20,elasticarrai:20,elg:[2,6],elsewher:6,email:15,emphas:10,empti:[21,23,26],empty_lik:26,enough:6,entir:12,entri:23,environ:[23,32],eof:2,equal:23,equinox:18,err:2,error:23,esutil:30,etc:1,euler:[],eval:6,even:27,event:23,eventfactori:23,everyth:21,exampl:[],except:[23,27],exclud:1,execut:34,exist:13,explan:29,express:6,extend:20,extens:27,extenst:23,extinct:[1,6,12,14,15,29,32],factor:29,factori:[1,23],fail:27,fals:[6,7,10,12,15,18,20,23,25,27,29,30],faster:[10,31],featur:27,februari:18,fetch:[11,13],few:[3,7],field:14,file:[],filenam:[11,13,14,19],filesystem:20,fill:7,filt:15,filter:[6,12,15],findlim:6,finkbein:15,first:[9,10,19,31],fit:[],fitsio:32,fitzpatrick:15,fix:27,fk4:18,flag:23,flux:6,follow:30,foot:2,footprint:[1,2,7,12],forget:17,forget_cach:[1,31],fork:34,forloop:27,format:[3,20],format_catalogue_filenam:14,format_image_filenam:14,fortran:[18,29,30],forward:[29,30],four:15,free:[23,32],from:[1,2,6,9,10,11,12,14,15,18,19,23,27,29,30,31,32,34],fromfil:20,fromndarrai:20,fsarrai:[],full:34,func:25,futur:10,galact:[3,18],gen_random:[],gener:[7,10,13,29],geometri:1,get:23,get_brick:10,get_debug:23,get_ebv:15,get_except:23,get_filenam:13,getfilenam:17,git:[2,32],github:34,githubusercont:15,given:[6,9,10,11,12,13,15,18,29,30,32],global:32,googl:[29,30],gov:[6,29,30],greisen:[29,30],group:[10,23],grow:20,gscratch:[2,32],gsfc:[29,30],guareente:27,guid:27,handl:[1,6,9,10,11,29],happen:31,have:[12,14,27,31],haystack:12,hdr:[29,30],hdu:19,header:[13,29,30],help:[6,23],here:[2,6,12,34],high:10,highest:12,hold:1,horriblli:27,host:34,howev:[10,23,32],html:[29,30],http:[2,6,15,29,30,32,34],huge:7,hybrid:23,identif:31,idl:18,ignore_miss:12,iindec:10,iindic:10,imag:[1,2,6,8,9,10,12,13,15,19,31],image_miss:12,imagerepo:[],imagin:27,imaginglss:2,imainginglss:32,immedi:26,immut:[9,10],implement:[3,6,17,30,34],impment:3,includ:1,incompat:18,increas:7,index:[9,10,12,13,29,30,31],indic:[],inform:[1,9,11,23],initi:[11,12],input:[10,12,18],insert:2,instal:2,instanc:10,instead:15,integ:[9,10,12,18],intend:2,interact:18,interfac:[12,13],intern:[10,31],invers:1,investig:2,iptyhon:23,ipynb:2,ipython:2,is_al:23,item:[6,12,20,23],iter:27,j2000:18,join:[2,23],jump:27,just:[6,12],kdtree:[],keep:15,kei:20,keyward:6,keyword:18,kill:27,killal:23,know:27,kwarg:[13,23,24,27],lack:10,lambda:14,landsman:18,larg:[30,31,32],later:[6,10],latitud:18,layout:13,lazi:12,lbl:6,least:7,len:34,less:[6,32],level:[9,10,12],libari:32,lie:7,light:[29,30,32],like:[7,27],lim:6,limit:[6,27],linspac:34,list:[6,10,12,13,21],littl:2,load:[1,2,11,13,32],local:6,lock:23,lockfactori:23,locktyp:23,logic:12,longitud:18,look:[6,9,12,29,30],loop:27,lower:12,lrg:6,m779:2,machin:23,made:18,mag:2,magic:23,mai:[10,18,27],main:[1,23,25,34],make:[10,12],manag:[10,14,23],mani:[1,11],manipul:[2,21],map:[6,15,25,29,32,34],mapreduc:22,mapreducebythread:25,march:18,margin:1,mask:[2,6,12],massa:15,master:[15,23,27],match:[10,12],matrix:30,max:9,maxsiz:23,mayb:29,member:1,meminfo:23,memori:[22,23],mention:1,meta:[9,10,13,20],metadata:[1,13,19],meth:12,method:[1,6,10,12,23],micron:15,migrat:14,milki:29,min:9,miss:12,mode:23,modifi:[6,13,14,18],modul:2,more:[12,27],most:15,mppwidth:2,multipl:12,multiprocess:[3,27,34],must:[2,6,12,32],mutipl:21,mw_transmiss:6,name:[9,10,12,27],nan:[9,12],nanomaggi:1,nasa:[29,30],nbviewer:2,ncol:10,ncut:6,ndarrai:[9,13],necessari:[9,16],need:[2,13,32,34],needl:12,neighbour:11,nersc:2,newer:15,newrow:20,ngp_filenam:15,nhat:11,nir:15,nitem:6,node:[3,21],nois:6,non:[18,23],none:[12,15,20,25,26,28],nontrivi:27,north:[3,29],note:[6,9,10,12,13,15,18,29,30],notebookdemo:2,nran:7,nrl:18,nrow:10,nsgp:29,num_thread:27,number:[3,7,10,21,23,27,29,30],numpi:[27,34],object:[1,2,3,6,7,9,10,11,12,13,14,15,17,20,23,24,25,27,34],obsolet:23,obtain:[10,11],obvious:[29,30],offset:30,old:[15,26],omp:27,omp_get_num_thread:27,omp_get_thread_num:27,omp_num_thread:[2,23,27],onli:[1,3,9,10,11,12,18,20,27,32],oom:27,open:13,openmp:[23,27],optim:10,option:[18,29,30],order:[3,9,10,13,27],ordr:27,org:[2,29,30],organ:10,orient:3,origin:13,other:31,otherwis:12,our:15,out:[1,2,6,9,23,27,31],outlin:12,output:18,outsid:[9,29,30],overridden:23,overview:8,pad:1,page:31,parallel:22,parallelexcept:27,paramet:[6,7,9,10,11,12,13,14,15,18,29,30],parse_filenam:14,pass:[6,24],patch:7,path:2,pattern:13,pbs_num_ppn:23,pbs_o_workdir:2,pdf:[29,30],per:[6,7,10],perform:[29,30],physic:23,pick:14,picklabl:34,pix2ang:[29,30],pix2ang_hdr:[29,30],pixel:[1,9,12,29,30],plane:30,pleas:[1,8],plu:[20,27],point:[6,7,21],point_list:21,point_valu:21,pole:3,pool:[22,23],posit:[6,7,9],posix:27,possibl:23,potenti:31,prefix:20,preload:13,pretti:27,primari:1,print:2,privat:[26,27],probabl:6,proc:23,procedur:18,process:[1,23,24,27,34],processbackend:[23,25],processgroup:23,produc:1,product:31,progress:7,project:[2,15,29,30,32],projectdir:[2,32],prompt:18,protect:23,provid:[2,10,32],psc:23,pure:21,purpos:10,put:23,pwd:32,python:[2,6,9,10,11,12,21,27,29,30],pythonpath:2,qso:6,queri:[1,6,9,10,12,15],queue:23,queuefactori:23,ra1:[1,9],ra2:[1,9],rainwoodman:34,rais:[7,23,27],ramax:12,ramin:12,random:7,randommaskelg:2,rang:[12,27,29,30,34],rank:27,rare:31,rather:23,raw:15,read:[1,2,9,12,13,19,23],read_imag:19,read_metadata:19,read_tabl:[10,19],readout:[1,9,12],realfunc:25,recommend:15,reconstruct:10,recurs:23,reduc:[3,25],reduct:27,region:[1,6,21],registri:[29,30],releas:[1,2,6,7,8,10,11,12,27,31,32],relev:[3,6],reli:[27,34],remov:[7,12,13],renam:14,replac:[6,15],repo:[9,12],report:1,repositori:[1,9,12,13],repres:1,represent:[6,29,30],requir:6,reset:23,resourc:34,result:24,return_index:10,return_invers:10,revert:9,rflux:6,root:[12,13,17,32],roughli:1,routin:[],row:[10,20],run:[24,29,30,31],runtimeerror:7,safe:27,same:[10,12,14],sampl:32,scalar:[12,18],scale:[29,31],sch:27,schafli:15,schedul:27,schema:[],scheme:1,schlafli:15,scope:27,sdss:15,search:[10,21,31],search_by_id:10,search_by_nam:10,section:[29,30],see:[3,23,29,30],seed:7,select:[6,18,20],selectelg:2,selectiong:2,self:21,semaphor:27,sens:12,sep:11,septemb:18,sequenc:25,serial:23,serv:13,set:[2,18,23,32],set_debug:23,sever:[1,7,12],sfd98:[15,29],sfd:[6,15],sfdmap:[],sgp_filenam:15,shall:[10,13,15,17,23,32],shape:26,share:[26,27,34],should:[6,13,18],sigma:6,signal:27,similar:34,similiar:27,simpl:[6,21,29],simpler:29,simplesearch:21,simplifi:29,sin:34,singl:10,size:[20,32],sky:[1,7,12],slave:[23,27],slaveexcept:23,slavefactori:23,slow:[11,27],small:[1,11,32],softwar:[2,31,32],some:[2,11,20,21,23,27,32],sometim:1,soon:13,sort:[10,12],sorted_coord:10,sorted_dec:10,sorted_ra:10,sourc:[2,6,7,9,10,11,12,13,14,15,17,18,20,21,23,24,25,26,27,28,29,30,31,32],sourth:29,south:[3,29],space:32,spatial:21,spawn:23,special:[3,29,30],specifi:[18,32],speed:[1,11],spirit:34,split_dim:21,squar:12,standard:[13,27],star:25,start:23,statement:27,stdout:7,step:21,still:27,stopprocessgroup:23,storag:32,storagefactori:23,store:[1,6,12,17,20],string:[6,10],string_lik:9,structur:31,stub:12,style:[29,30],sub:3,subclass:17,submit:2,submodul:[],subtre:21,suppli:18,support:[16,29,30,31],suppos:32,survei:[1,7,31],synonym:23,system:[3,9,13,23,29,30],tabl:[],take:1,taken:[6,15],tan:30,tangent:[3,30],tar:32,target:31,targetselect:6,term:21,termin:23,test:[12,27,32],text:20,than:[6,15,32],thei:6,them:[2,10,11,15,27],thi:[1,2,6,7,9,10,11,12,13,15,18,27,29,30,31,32],thread:[15,23,27],threadbackend:23,through:21,tile:1,time:[12,27,31],tofil:20,tondarrai:20,too:27,tool:32,toplevel:32,torqu:23,total:32,total_memori:23,tpool:28,tpv:[29,30],tpvwc:[29,30],trac:6,tracebackstr:23,tractor:[1,9,12,15,31],transform:[3,9,15,18,29,30],translat:12,transmiss:6,treat:12,tree:[20,21,32],treelist:21,treenod:21,tricki:6,trunk:30,tupl:[9,12],two:[18,29],type:18,ufunc:27,unexpectedli:27,uniform:10,uniformli:7,uniqu:9,unit:11,unless:18,unprotect:27,unsaf:27,unsupport:29,until:23,updat:[15,31],updatedtyp:17,upon:23,upper:11,uppercase_dtyp:11,url:2,user:[],usual:[10,29,30],util:[],v0_0:32,valu:[1,9,12,15,17,18,23,27,32],valueerror:27,vari:9,variabl:[23,27,32],varianc:1,vector:[10,11,18,29,30],verbos:7,version:[10,12,14,18,29],vet:15,via:[1,15],wai:[1,29],wait:[23,24],walk:21,walltim:2,want:[12,14],wcs_simplezea:[],wcs_tangent:[],wcsutil:30,websit:32,weight:[29,30],west:32,wget:32,what:29,when:[12,27],where:7,whether:6,which:[1,11],whose:13,wiki:6,wise:15,within:[1,7,10],without:[2,32],won:[7,34],work:[2,21,23,32,34],worker:23,world:[29,30],written:18,www:[29,30],xxxx:27,xxxxj:27,xzvf:32,yenti:18,yield:27,you:[21,23],zea:[3,29],zero:18,zero_offset:[29,30],zeroth:19},titles:["API Reference","Data Model","Examples","Helper routines","imaginglss package","imaginglss.analysis package","imaginglss.analysis.cuts module","imaginglss.analysis.gen_random module","imaginglss.model package","imaginglss.model.brick module","imaginglss.model.brickindex module","imaginglss.model.catalogue module","imaginglss.model.datarelease module","imaginglss.model.imagerepo module","imaginglss.model.schema module","imaginglss.model.sfdmap module","imaginglss.utils package","imaginglss.utils.columnstore module","imaginglss.utils.euler module","imaginglss.utils.fits module","imaginglss.utils.fsarray module","imaginglss.utils.kdtree module","imaginglss.utils.sharedmem package","imaginglss.utils.sharedmem.backends module","imaginglss.utils.sharedmem.background module","imaginglss.utils.sharedmem.mapreduce module","imaginglss.utils.sharedmem.memory module","imaginglss.utils.sharedmem.parallel module","imaginglss.utils.sharedmem.pool module","imaginglss.utils.wcs_simplezea module","imaginglss.utils.wcs_tangent module","Welcome to ImagingLSS&#8217;s documentation!","Installation","API Reference","sharedmem"],titleterms:{analysi:[5,6,7],api:[0,31,33],backend:23,background:24,brick:9,brickindex:10,catalogu:11,columnstor:17,content:[2,3],cut:6,data:1,datareleas:12,dataset:32,depenc:32,document:31,edison:2,euler:18,exampl:[2,32],file:32,fit:19,fsarrai:20,gen_random:7,get:32,guid:31,helper:3,imagerepo:13,imaginglss:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],indic:31,instal:32,issu:31,job:2,kdtree:21,known:31,mapreduc:25,memori:26,model:[1,8,9,10,11,12,13,14,15],modul:[6,7,9,10,11,12,13,14,15,17,18,19,20,21,23,24,25,26,27,28,29,30],notebook:2,packag:[4,5,8,16,22],parallel:27,path:32,pool:28,refer:[0,31,33],routin:3,schema:14,script:2,sfdmap:15,sharedmem:[3,22,23,24,25,26,27,28,34],start:32,submodul:[5,8,16,22],subpackag:4,tabl:31,user:31,util:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],wcs_simplezea:29,wcs_tangent:30,welcom:31}})