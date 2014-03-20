sublmodule CustomHelpers
  def files_in_path( path )
    Dir.glob("./source/#{path}/*").
    map{ |f| f.gsub('./source/company/sections/team/_', '').gsub('.haml','') }
  end
end