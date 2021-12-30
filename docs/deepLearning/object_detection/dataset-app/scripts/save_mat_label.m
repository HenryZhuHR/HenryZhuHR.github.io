





label_data=gTruth.LabelData
f_label=fopen('trafficLightGre/trafficLightGre_13.label','w');
for i=1:length(label_data.trafficLightGre)
    time_duration=label_data.Time(i);
    time=string(time_duration);
    time=replace(time,'秒','');
    bbox_cell=label_data.trafficLightGre(i);
    bbox_num=bbox_cell{1};
    bbox=num2str(bbox_num);
    
    fprintf(f_label,'%s ',time);
    fprintf(f_label,'%s\n',bbox);
end
fclose(f_label);
clear all;
clc;