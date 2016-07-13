(function(){
	window.my_tmpl = {
		//创建item魔板
		itemTmpl:function(){
			var tmpl ='<div class="class_box_left ">'
			   +'<div class="class_box_left_cell_first ">'
					+'<span class=" class_box_left_cell class_box_left_cell_productionName">'
						+'<p>作品名称：︽ 锄禾 ︾</p>'
					+'</span>'
					+'<span class="class_box_left_cell class_box_left_cell_authorName">'
						+'<p>作者：李绅</p>'
					+'</span>'
					+'<span class="class_box_left_cell ">'
						+'<p>专业题词：xxxx</p>'
					+'</span>'
					+'<span class="class_box_left_cell " id="ee">'
						+'<p>简介：这组诗深刻地反映了中国封建时代农民的生存状态。第一首诗具体而形象地描绘了到处硕果累累的景象，突出了农民辛勤劳动获得丰收却两手空空、惨遭饿死的现实问题；第二首诗描绘了在烈日当空的正午农民田里劳作的景象，概括地表现了农民终年辛勤劳动的生活，最后以“谁知盘中餐，粒粒皆辛苦”这样近似蕴意深远的格言，表达了诗人对农民真挚的同情之心。组诗选取了比较典型的生活细节和人们熟知的事实，集中地刻画了当时社会的矛盾。全诗风格简朴厚重，语言通俗质朴，音节和谐明快，并运用了虚实结合与对比手法，增强了诗的表现力。这两首诗不仅在民间广泛流传，在文学史上亦有一定影响，近代以来更作为思想教材选入了小学教科书。</p>'
					+'</span>'
				+'</div>'
				+'<div class="class_box_left_cell_section "style="display: none;">'
					+'<span class=" class_box_left_cell class_box_left_cell_productionName">'
						+'<p>作品名称：︽ 锄禾 ︾</p>'
					+'</span>'
					+'<span class="class_box_left_cell class_box_left_cell_authorName">'
						+'<p>作者：李绅</p>'
					+'</span>'
					+'<span class="class_box_left_cell ">'
						+'<p>专业题词：xxxx</p>'
					+'</span>'
					+'<span class="class_box_left_cell ">'
						+'<p>简介：这组诗深刻地反映了中国封建时代农民的生存状态。第一首诗具体而形象地描绘了到处硕果累累的景象，突出了农民辛勤劳动获得丰收却两手空空、惨遭饿死的现实问题；第二首诗描绘了在烈日当空的正午农民田里劳作的景象，概括地表现了农民终年辛勤劳动的生活，最后以“谁知盘中餐，粒粒皆辛苦”这样近似蕴意深远的格言，表达了诗人对农民真挚的同情之心。组诗选取了比较典型的生活细节和人们熟知的事实，集中地刻画了当时社会的矛盾。全诗风格简朴厚重，语言通俗质朴，音节和谐明快，并运用了虚实结合与对比手法，增强了诗的表现力。这两首诗不仅在民间广泛流传，在文学史上亦有一定影响，近代以来更作为思想教材选入了小学教科书。</p>'
					+'</span>'
				+'</div>'
			+'</div>'
			return tmpl;
		},
	};
	//外词汉韵 部分的模板 =================================================
	
	window.nice_tmpl = {
	
	itemTmpl:function(){
	
	var tmpl = '<div class="nice_box_Left">'
				+'<div class="nice_box_productName">'
					+'<span>作者名称：悯农</span>'
					+'<span>作者：李绅</span>'
					+'<span>专业题词：xxx不知道什么鬼</span>'
					+'<span>简介：这组诗深刻地反映了中国封建时代农民的生存状态。第一首诗具体而形象地描绘了到处硕果累累的景象，突出了农民辛勤劳动获得丰收却两手空空、惨遭饿死的现实问题；第二首诗描绘了在烈日当空的正午农民田里劳作的景象，概括地表现了农民终年辛勤劳动的生活，最后以“谁知盘中餐，粒粒皆辛苦”这样近似蕴意深远的格言，表达了诗人对农民真挚的同情之心。组诗选取了比较典型的生活细节和人们熟知的事实，集中地刻画了当时社会的矛盾。全诗风格简朴厚重，语言通俗质朴，音节和谐明快，并运用了虚实结合与对比手法，增强了诗的表现力。这两首诗不仅在民间广泛流传，在文学史上亦有一定影响，近代以来更作为思想教材选入了小学教科书。</span>'
				+'</div>'
			+'</div>';
			return tmpl;
	}
	};
	
	//汉词美声的templ
	
	window.voice_tmpl = {
	
	itemTmpl:function(){
	var tmpl ='<div class="voice_box_container">'
	+'<div class="voice_box_Templ voice_box_Left ">'
				+'<div class="voice_box_Left_top">'
					+'<span>作者：李绅</span>'
				+'</div>'
				+'<div class="voice_box_Left_bottom">'
					+'<span>作品：悯农</span>'
				+'</div>'
			+'</div>'
			+'<div class=" voice_box_Templ voice_box_Middle">'
				+'<span>专业题词：xx不知道是什么鬼懂啊粉丝大幅</span>'
			+'</div>'
			+'<div class="voice_box_Templ voice_box_Right">'
				+'<span>简介：这组诗深刻地反映了</span>'
			+'</div>'
			+'</div>';
			return tmpl;
	}
	};
	
})();

		
