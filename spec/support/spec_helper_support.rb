require 'erb'

def test_data_yml(path)
  test_data_path("#{path}.yml")
end

def test_data_path(path)
  File.expand_path("spec/test_data/#{path}/")
end

def xml_fixture(template_name, args = {})
  path = test_data_path("xml/#{template_name}.xml.erb")
  Class.new.extend(View::ErbHelper).render_template(path, OpenStruct.new(args))
end

def with_versioning
  was_enabled = PaperTrail.enabled?
  was_enabled_for_controller = PaperTrail.enabled_for_controller?
  PaperTrail.enabled = true
  PaperTrail.enabled_for_controller = true
  begin
    yield
  ensure
    PaperTrail.enabled = was_enabled
    PaperTrail.enabled_for_controller = was_enabled_for_controller
  end
end
