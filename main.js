const {app,BrowserWindow}=require('electron');const path=require('path');
function createWindow(){const w=new BrowserWindow({width:1100,height:820,backgroundColor:'#0b0c0e',autoHideMenuBar:true,webPreferences:{contextIsolation:true,sandbox:true}});
 w.loadFile(path.join(__dirname,'src','index.html'))}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
